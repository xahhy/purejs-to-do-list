export default class Todo {
    constructor(id, name, status, dueDate, tags=[]){
        this.id = id;
        this.name = name;
        this.status = status || 'TODO';
        this.dueDate = dueDate;
        this.tags = tags;
    }
}