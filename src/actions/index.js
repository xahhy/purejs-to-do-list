import store from '../store';
let todoId = 0;
export const addTodo = name => ({
    type: 'ADD_TODO',
    id: todoId++,
    status: store.STATUS.TODO,
    name
});

export const updateTodo = (id, name, status) => ({
    type: 'UPDATE_TODO',
    id,
    name,
    status
});