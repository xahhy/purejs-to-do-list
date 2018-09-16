import React from 'react';
import TodoList from './TodoList';

export default (props)=>{
    const {todos, ...rest} = props;
    const _todos = todos.todos.filter(todo=>todos.visible.includes(todo.id));
    return <TodoList todos={_todos} {...rest}/>
}