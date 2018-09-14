export default class Todo {
    constructor(id, name, status, dueDate){
        this.id = id;
        this.name = name;
        this.status = status || 'TODO';
        this.dueDate = dueDate;
        this.tags = [];
    }
}