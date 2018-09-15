const defaultTags = [
    'Meeting', 'TWU'
];
const tags = (state=defaultTags, action) => {
    switch (action.type) {
        case 'ADD_TAG':
            return [...state, action.tag]
    }
    return state;
};
export default tags;