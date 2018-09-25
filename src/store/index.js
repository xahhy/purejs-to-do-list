import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    // applyMiddleware(promiseMiddleware)
    // applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;