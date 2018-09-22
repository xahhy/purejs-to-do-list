import React from 'react';
import TodoList from './TodoList';

export default (props)=>{
    const {todos, ...rest} = props;
    const _todos = todos.todos.filter(todo=>todos.visible.includes(todo.id));
    const _filter = todos.filter;
    return <TodoList todos={_todos} filter={_filter} {...rest}/>
}