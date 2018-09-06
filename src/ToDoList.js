class ToDoList {
  constructor(model, container) {
    this.model = model;
    this.container = container;
  }

  render() {
    let toDoListBody = this.model.data.map(item=>
        `<tr><td><input type="checkbox" name="${item.id}"><input type="text" value="${item.name}"></td>
<td><select>
<option value="${this.model.status.TODO}" ${item.status === this.model.status.TODO ? 'selected' : ''}>${this.model.status.TODO}</option>
<option value="${this.model.status.DONE}" ${item.status === this.model.status.DONE ? 'selected' : ''}>${this.model.status.DONE}</option>
<option value="${this.model.status.BLOCKED}" ${item.status === this.model.status.BLOCKED ? 'selected' : ''}>${this.model.status.BLOCKED}</option>
</select></td>
</tr>`).join('');
    this.container.innerHTML = `<table>${toDoListBody}</table>`;
  }
}

export default ToDoList;