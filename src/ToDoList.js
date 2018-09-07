class ToDoList {
    constructor(model, container) {
        this.model = model;
        this.container = container;
    }

    updateToDoList(event) {
        let itemWraper = event.currentTarget;
        let itemName = itemWraper.querySelector('input').value;
        let itemStatus = itemWraper.querySelector('select').value;
        let itemId = itemWraper.getAttribute('itemId');
        this.model.updateToDoList(itemId, itemName, itemStatus);
        this.model.fire();
    }

    render() {
        let toDoListBody = this.model.data.map(item =>
            `<tr><td><input type="checkbox" name="${item.id}"></td><td class="item" itemId="${item.id}"><input type="text" value="${item.name}">
<select>
<option value="${this.model.status.TODO}" ${item.status === this.model.status.TODO ? 'selected' : ''}>${this.model.status.TODO}</option>
<option value="${this.model.status.DONE}" ${item.status === this.model.status.DONE ? 'selected' : ''}>${this.model.status.DONE}</option>
<option value="${this.model.status.BLOCKED}" ${item.status === this.model.status.BLOCKED ? 'selected' : ''}>${this.model.status.BLOCKED}</option>
</select>
</td>
</tr>`
        ).join('');
        this.container.innerHTML = `<table>${toDoListBody}</table>`;
        document.querySelectorAll('.item').forEach(input => input.addEventListener('focusout', this.updateToDoList.bind(this)))
    }
}

export default ToDoList;