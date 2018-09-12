import store from "../store";

const defaultToDos = [{id: 0, name: 'name', status: 'TODO'}];
const todos = (state = defaultToDos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    status: action.status,
                    name: action.name
                }
            ];
        case 'UPDATE_TODO':
            let updatedTodo = state.find(todo => todo.id === action.id);
            action.name && (updatedTodo.name = action.name);
            action.status && (updatedTodo.status = action.status);
            return [...state];
        case 'DELETE_TODOS':
            return [...state.filter(item=>action.ids.find(_item=> _item === item.id) === undefined)];
        default:
            break;
    }
    return state;
};
export default todos;