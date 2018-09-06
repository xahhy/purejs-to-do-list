import ToDoList from "./ToDoList";

class ActionButtons {
    constructor(model, container) {
        this.model = model;
        this.container = container;
        this.addItemCallback = this.addItemCallback.bind(this);
    }

    addItemCallback() {
        this.model.addToDoList('', this.model.status.TODO);
        this.model.fire();
    }

    deleteItemsCallback(event) {
        let inputs = document.querySelectorAll('input[type=checkbox]');
        let checkedInput = [...inputs].filter(input=>input.checked).map(input=>input.getAttribute('name'));
        checkedInput.forEach(index=>this.model.removeToDoList(parseInt(index)));
        this.model.fire();
    }

    render() {
        this.container.innerHTML = '<button id="btnAdd">Add</button>' +
            '<button id="btnDelete">Delete</button>';
        document.getElementById("btnAdd").addEventListener('click', this.addItemCallback.bind(this));
        document.getElementById("btnDelete").addEventListener('click', this.deleteItemsCallback.bind(this));
    }
}

export default ActionButtons;