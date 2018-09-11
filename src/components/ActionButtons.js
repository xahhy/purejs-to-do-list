import {addTodo} from '../actions/index';
import React from 'react';

class ActionButtons extends React.Component{
    constructor(props) {
        super(props);
        this.addItemCallback = this.addItemCallback.bind(this);
    }

    addItemCallback() {
        this.store.dispatch(addTodo(''));
    }

    deleteItemsCallback(event) {
        return;
        let inputs = document.querySelectorAll('input[type=checkbox]');
        let checkedInput = [...inputs].filter(input => input.checked).map(input => input.getAttribute('name'));
        checkedInput.forEach(index => this.store.removeToDoList(parseInt(index)));
        this.store.fire();
    }

    render() {
        return (<div>
            <button id="btnAdd" onClick={this.addItemCallback}>Add</button>
            <button id="btnDelete" onClick={this.deleteItemsCallback}>Delete</button>
            </div>
    )
    }
}

export default ActionButtons;