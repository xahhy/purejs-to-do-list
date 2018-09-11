import {updateTodo} from "./actions";

class ToDoList {
    constructor(store, container) {
        this.store = store;
        this.container = container;
    }

    updateToDoList(event) {
        let itemWraper = event.currentTarget;
        let itemName = itemWraper.querySelector('input').value;
        let itemStatus = itemWraper.querySelector('select').value;
        let itemId = itemWraper.getAttribute('itemId');
        this.store.dispatch(updateTodo(itemId, itemName, itemStatus));
    }

    render() {
        let toDoListBody = this.store.getState().todos.map(item =>
            `<tr><td><input type="checkbox" name="${item.id}"></td><td class="item" itemId="${item.id}"><input type="text" value="${item.name}">
<select>
<option value="${this.store.STATUS.TODO}" ${item.status === this.store.STATUS.TODO ? 'selected' : ''}>${this.store.STATUS.TODO}</option>
<option value="${this.store.STATUS.DONE}" ${item.status === this.store.STATUS.DONE ? 'selected' : ''}>${this.store.STATUS.DONE}</option>
<option value="${this.store.STATUS.BLOCKED}" ${item.status === this.store.STATUS.BLOCKED ? 'selected' : ''}>${this.store.STATUS.BLOCKED}</option>
</select>
</td>
</tr>`
        ).join('');
        this.container.innerHTML = `<table>${toDoListBody}</table>`;
        document.querySelectorAll('.item').forEach(input => input.addEventListener('focusout', this.updateToDoList.bind(this)))
    }
}

export default ToDoList;