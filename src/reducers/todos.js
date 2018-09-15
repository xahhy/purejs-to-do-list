import Todo from '../data/Todo';
import {isValidDate, STATUS} from '../utils';

const defaultToDos = {
    todos: [new Todo(0, 'name', STATUS.TODO)],
    visible: [0],
    filter: {
        startDate: null,
        endDate: null,
        keyWord: '',
        tags: []
    }
};

const filterTodo = (todos, ...filters) => {
    return filters.reduce((acc, filter) => acc.filter(filter), todos);
};

const filterByName = (keyWord) => {
    return todo => todo.name.includes(keyWord);
};

const filterByDate = (startDate, endDate) => {
    return todo => (isValidDate(startDate) ? new Date(todo.dueDate) >= startDate : true) &&
        (isValidDate(endDate) ? new Date(todo.dueDate) <= endDate : true);
};

const filterByTags = (tags=[]) => {
    return todo => tags.length ? tags.filter(tag=>todo.tags.includes(tag)).length !== 0 : true;
};

const filterCombine = (todos, filter) => {
    const {startDate, endDate, keyWord, tags} = filter;
    return filterTodo(todos,
        filterByName(keyWord),
        filterByDate(startDate, endDate),
        filterByTags(tags)
    );
};

const todos = (state = defaultToDos, action) => {
    let filter;
    switch (action.type) {
        case 'ADD_TODO':
            const todos = [
                ...state.todos,
                new Todo(action.id, action.name, action.status)
            ];
            return {
                ...state,
                todos,
                visible: [...state.visible, action.id]
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todo.id) {
                        return action.todo;
                    } else return todo;
                })
            };
        case 'DELETE_TODOS':
            return {
                ...state,
                todos: [...state.todos.filter(item => action.ids.find(_item => _item === item.id) === undefined)],
                visible: state.visible.filter(id => action.ids.find(_item => _item === id) === undefined)
            };
        case 'FILTER_BY_NAME':
            filter = {
                ...state.filter, keyWord: action.keyWord
            };
            return {
                ...state,
                visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'FILTER_BY_DATE':
            filter = {
                ...state.filter, startDate:action.startDate, endDate:action.endDate
            };
            return {
                ...state,
                visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'FILTER_BY_TAGS':
            filter = {
                ...state.filter, tags: action.tags
            };
            return {
                ...state,
                visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        default:
            break;
    }
    return state;
};
export default todos;