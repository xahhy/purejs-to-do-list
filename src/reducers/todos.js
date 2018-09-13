import store from '../store';
import Todo from '../data/Todo';

const defaultToDos = {todos: [new Todo(0, 'name', 'TODO')], visible: []};
const todos = (state = defaultToDos, action) => {
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
                visible: state.visible.filter(id=> action.ids.find(_item=>_item === id) === undefined)
            };
        case 'FILTER_BY_NAME':
            return {
                ...state,
                todos:[

                ]
            };
        default:
            break;
    }
    return state;
};
export default todos;