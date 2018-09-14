import React from 'react';
import BarChart from './BarChart';

export default (props)=>{
    const {todos, ...rest} = props;
    const _todos = todos.todos.filter(todo=>todos.visible.includes(todo.id));
    return <BarChart todos={_todos} {...rest}/>
}