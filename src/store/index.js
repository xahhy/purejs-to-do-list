import {createStore} from 'redux';
import rootReducer from '../reducers';
const store = createStore(rootReducer, {todos:[{id:0, name:'name', status:'TODO'}]});
console.log(store.getState());
store.STATUS = {TODO: 'TODO', DONE: 'DONE', BLOCKED: 'BLOCKED'};
store.groupBy = function(prop){
    let result = this.getState().todos.reduce((groups, item) => {
        groups[item[prop]] = groups[item[prop]] || [];
        groups[item[prop]].push(item);
        return groups;
    }, {});
    return result;
}.bind(store);
export default store;