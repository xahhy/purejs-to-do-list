import ToDoList from "./ToDoList";

class ActionButtons {
  constructor(model, container) {
    this.model = model;
    this.container = container;
    this.addItemCallback = this.addItemCallback.bind(this);
  }

  addItemCallback(){
      this.model.data.push({name:'', status: this.model.status.TODO, editable:true});
      this.model.fire();
  }

  render() {
    this.container.innerHTML = '<button id="btnAdd">Add</button>' +
        '<button id="btnDelete">Delete</button>';
    document.getElementById("btnAdd").addEventListener('click', this.addItemCallback.bind(this));
  }
}

export default ActionButtons;