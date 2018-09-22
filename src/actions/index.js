import shortid from 'shortid';
import {groupBy, STATUS} from '../utils';
import login from '../reducers/login';

export const addTodo = name => ({
    type: 'ADD_TODO',
    id: shortid.generate(),
    status: STATUS.TODO,
    name,
});

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    todo
});

export const updateTodos = todos => ({
    type: 'UPDATE_TODOS',
    todos
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

export const toggleDetail = show => ({
    type: 'TOGGLE_DETAIL',
    show
});

export const setCurrentTodoForDetail = todo => ({
    type: 'SET_CURRENT_TODO',
    todo
});

export const filterByName = keyWord => ({
    type: 'FILTER_BY_NAME',
    keyWord
});
export const filterByDate = (startDate, endDate) => ({
    type: 'FILTER_BY_DATE',
    startDate, endDate
});
export const filterByTags = (tags=[]) => ({
    type: 'FILTER_BY_TAGS',
    tags
});
export const filterClearAdvanced = ()=>({
    type: 'FILTER_CLEAR_ADVANCED'
});

export const updateSortRule = (property) => ({
    type: 'UPDATE_SORT_RULE',
    property
});

export const loginWith = (login) => ({
    type: 'LOGIN_USER',
    ...login
});