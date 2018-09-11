import {addTodo} from './actions';

class ActionButtons {
    constructor(store, container) {
        this.store = store;
        this.container = container;
        this.addItemCallback = this.addItemCallback.bind(this);
    }

    addItemCallback() {
        // this.store.addToDoList('', this.store.status.TODO);
        // this.store.fire();
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
        this.container.innerHTML = '<button id="btnAdd">Add</button>' +
            '<button id="btnDelete">Delete</button>';
        document.getElementById("btnAdd").addEventListener('click', this.addItemCallback.bind(this));
        document.getElementById("btnDelete").addEventListener('click', this.deleteItemsCallback.bind(this));
    }
}

export default ActionButtons;