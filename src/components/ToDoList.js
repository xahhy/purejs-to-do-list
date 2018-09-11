import {updateTodo} from '../actions/index';
import React from 'react';
class ToDoList extends React.Component{
    constructor(props) {
        super(props);
    }

    updateToDoList(event) {
        let itemWrapper = event.currentTarget;
        let itemName = itemWrapper.querySelector('input').value;
        let itemStatus = itemWrapper.querySelector('select').value;
        let itemId = itemWrapper.getAttribute('itemId');
        this.store.dispatch(updateTodo(itemId, itemName, itemStatus));
    }

    render() {
        return (
            <table>
            {this.store.getState().todos.map(item =>
            `<tr><td><input type="checkbox" name="${item.id}"></td><td class="item" itemId="${item.id}" ><input type="text" value="${item.name}">
<select>
<option value="${this.store.STATUS.TODO}" ${item.status === this.store.STATUS.TODO ? 'selected' : ''}>${this.store.STATUS.TODO}</option>
<option value="${this.store.STATUS.DONE}" ${item.status === this.store.STATUS.DONE ? 'selected' : ''}>${this.store.STATUS.DONE}</option>
<option value="${this.store.STATUS.BLOCKED}" ${item.status === this.store.STATUS.BLOCKED ? 'selected' : ''}>${this.store.STATUS.BLOCKED}</option>
</select>
</td>
</tr>`
        ).join('')}
            </table>
    )
    }

    componentDidMount(){
        document.querySelectorAll('.item').forEach(input => input.addEventListener('focusout', this.updateToDoList.bind(this)))
    }
}

export default ToDoList;