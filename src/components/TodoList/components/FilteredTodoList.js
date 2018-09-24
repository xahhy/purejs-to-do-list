import React from 'react';
import TodoList from './TodoList';

export default (props)=>{
    const {todos, ...rest} = props;
    const _todos = todos.todos.content;
    // const _todos = todos.todos.filter(todo=>todos.visible.includes(todo.id));
    const page = {
        size: todos.todos.size,
        number: todos.todos.number,
        totalElements: todos.todos.totalElements
    };
    const _filter = todos.filter;
    return <TodoList todos={_todos} page={page} filter={_filter} {...rest}/>
}