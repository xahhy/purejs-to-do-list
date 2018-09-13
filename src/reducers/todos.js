import store from '../store';
import Todo from '../data/Todo';

const defaultToDos = {todos: [new Todo(0, 'name', 'TODO')], visible: []};
const todos = (state = defaultToDos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    new Todo(action.id, action.name, action.status)
                ]
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
                todos: [...state.todos.filter(item => action.ids.find(_item => _item === item.id) === undefined)]
            };
        default:
            break;
    }
    return state;
};
export default todos;