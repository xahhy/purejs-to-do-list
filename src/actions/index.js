import store from '../store';
import shortid from 'shortid';
import {groupBy} from '../utils';

export const addTodo = name => ({
    type: 'ADD_TODO',
    id: shortid.generate(),
    status: store.STATUS.TODO,
    name,
});

export const updateTodo = (id, name, status) => ({
    type: 'UPDATE_TODO',
    id,
    name,
    status
});

export const addSelectedTodo = id => ({
    type: 'ADD_SELECTED_TODO',
    id
});

export const deleteSelectedTodo = id => ({
    type: 'DELETE_SELECTED_TODO',
    id
});

export const deleteTodos = ids => ({
    type: 'DELETE_TODOS',
    ids
});

export const getTodoChart = todos => ({
    type: 'GET_TODO_CHART',
    chart: groupBy(todos, 'status')
});