const defaultTags = [
    {
        id: 0,
        name: 'Meeting'
    }, {
        id: 1,
        name: 'TWU'
    }
];
const tags = (state=defaultTags, action) => {
    switch (action.type) {
        case 'ADD_TAG':
            return [...state, action.tag];
        case 'UPDATE_TAGS':
            return [...action.tags];
    }
    return state;
};
export default tags;