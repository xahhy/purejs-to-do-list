import Todo from '../data/Todo';
import {isValidDate, STATUS} from '../utils';
import {fetchAllTodosAPI} from '../api';

const defaultToDos = {
    todos: {
        content: [new Todo(0, 'name', STATUS.TODO)],
        totalPages: 1,
        totalElements: 5,
        last: true,
        size: 20,
        number: 0,
        sort: null,
        first: true,
        numberOfElements: 5
    },
    visible: [0],
    filter: {
        startDate: null,
        endDate: null,
        keyWord: '',
        tags: [],
        order: 'desc',
        orderBy: 'name',
        page: 0,
        size: 5
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
        /* Not used by API */
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
        /* Not used by API */
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todo.id) {
                        return action.todo;
                    } else return todo;
                })
            };
        case 'UPDATE_TODOS':
            return {
                ...state,
                todos: action.todos
                // visible: action.todos.map(todo=>todo.id)
            };
        /* Not used by API */
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
                // visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'FILTER_BY_DATE':
            filter = {
                ...state.filter, startDate:action.startDate, endDate:action.endDate
            };
            return {
                ...state,
                // visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'FILTER_BY_TAGS':
            filter = {
                ...state.filter, tags: action.tags
            };
            return {
                ...state,
                // visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'FILTER_CLEAR_ADVANCED':
            filter = {
                ...defaultToDos.filter, keyWord: state.filter.keyWord
            };
            return {
                ...state,
                // visible: filterCombine(state.todos, filter).map(todo => todo.id),
                filter
            };
        case 'UPDATE_SORT_RULE':
            const {property:orderBy, direction:order} = action;
            state = {
                ...state,
                filter: {...state.filter, orderBy, order}
            };
            action.callback && action.callback(state.filter);
            return state;
        case 'UPDATE_PAGE_RULE':
            return {
                ...state,
                filter: {...state.filter, page:action.page, size: action.size}
            };
        case 'UPDATE_FILTER':
            return {
                ...state, filter:action.filter
            };
        default:
            break;
    }
    return state;
};
export default todos;