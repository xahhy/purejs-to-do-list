const selected = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SELECTED_TODO':
            return [...state, action.id];
        case 'DELETE_SELECTED_TODO':
            return [...state.filter(id => id !== action.id)]
    }
    return state;
};
export default selected;