import Todo from '../data/Todo';

const details = (state={show: false, todo: new Todo()}, action) => {
    switch (action.type) {
        case 'TOGGLE_DETAIL':
            return {...state, show: action.show};
        case 'SET_CURRENT_TODO':
            return {...state, todo: action.todo}
    }
    return state;
};
export default details;