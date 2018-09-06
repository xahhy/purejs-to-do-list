class Model {
    constructor() {
        this.handlers = [];
        this.status = {
            TODO: 'TODO', DONE: 'DONE', BLOCKED: 'BLOCKED'
        };
        this.data = [
            {name: 'Javascript is BullShit !', status: this.status.TODO},
            {name: 'Javascript is BullShit !!', status: this.status.BLOCKED},
            {name: 'Javascript is BullShit !!!', status: this.status.BLOCKED},
            {name: 'Javascript is BullShit !!!', status: this.status.BLOCKED},
            {name: 'Javascript is BullShit !!!', status: this.status.BLOCKED}
        ];
        this.groupBy = this.groupBy.bind(this);
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