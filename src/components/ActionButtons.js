import {addTodo} from '../actions/index';
import React from 'react';

class ActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.addItemCallback = this.addItemCallback.bind(this);
    }

    addItemCallback = () =>{
        this.props.addTodo('');
    };

    deleteItemsCallback = (event) => {
        this.props.deleteSelectedTodos(this.props.selected)
    };

    render() {
        return (
            <div>
                <button id="btnAdd" onClick={this.addItemCallback}>Add</button>
                <button id="btnDelete" onClick={this.deleteItemsCallback}>Delete</button>
            </div>
        )
    }
}

export default ActionButtons;