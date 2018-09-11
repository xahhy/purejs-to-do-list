import store from "../store";

const todos = (state = [], action) => {
    console.log(state);
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
            let updatedTodo = state.find(todo=>todo.id == action.id);
            updatedTodo.name = action.name;
            updatedTodo.status = action.status;
            break;
        default:
            break;
    }
    return state;
};
export default todos;