import React from 'react';
import BarChart from './BarChart';
import DueDateChart from './DueDateChart';

export default (props)=>{
    const {todos, ...rest} = props;
    // const _todos = todos.todos.content.filter(todo=>todos.visible.includes(todo.id));
    const _todos = todos.todos.content;
    return (
        <div>
            <BarChart todos={_todos} {...rest}/>
            <DueDateChart todos={_todos} {...rest}/>
        </div>
    )
}