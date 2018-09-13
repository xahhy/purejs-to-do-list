import store from '../store';
import Todo from '../data/Todo';

const defaultToDos = [new Todo(0, 'name', 'TODO')];
const todos = (state = defaultToDos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                new Todo(action.id, action.name, action.status)
            ];
        case 'UPDATE_TODO':
            let updatedTodo = state.find(todo => todo.id === action.todo.id);
            updatedTodo = action.todo;
            return [...state];
        case 'DELETE_TODOS':
            return [...state.filter(item=>action.ids.find(_item=> _item === item.id) === undefined)];
        default:
            break;
    }
    return state;
};
export default todos;