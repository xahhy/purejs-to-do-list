import {createStore} from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
store.STATUS = {TODO: 'TODO', DONE: 'DONE', BLOCKED: 'BLOCKED'};
export default store;