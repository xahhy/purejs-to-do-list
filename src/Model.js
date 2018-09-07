class Model {
    constructor() {
        this.handlers = [];
        this.status = {
            TODO: 'TODO', DONE: 'DONE', BLOCKED: 'BLOCKED'
        };
        this.data = [
            // {id: 0, name: 'Javascript is BullShit !', status: this.status.TODO},
            // {id: 1,name: 'Javascript is BullShit !!', status: this.status.BLOCKED},
            // {id: 2,name: 'Javascript is BullShit !!!', status: this.status.BLOCKED},
            // {id: 3,name: 'Javascript is BullShit !!!', status: this.status.BLOCKED},
            // {id: 4,name: 'Javascript is BullShit !!!', status: this.status.BLOCKED}
        ];
        this.groupBy = this.groupBy.bind(this);
    }

    addToDoList(name, status){
        this.data.push({id:this.data.length, name: name, status: status});
    }
    updateToDoList(id, name, status){
        let item = this.data.find(item=>item.id == id);
        item.name = name;
        item.status = status;
    }
    removeToDoList(index){
        this.data = this.data.filter(item=>item.id !== index);
    }
    groupBy(prop){
        let result = this.data.reduce((groups, item) => {
            groups[item[prop]] = groups[item[prop]] || [];
            groups[item[prop]].push(item);
            return groups;
        }, {});
        return result;
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            item=> {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    fire(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}

export default Model;