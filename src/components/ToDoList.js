import {updateTodo} from '../actions/index';
import React from 'react';
import store from '../store';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    updateToDoName = (event, id) => {
        this.props.updateTodo(id, event.target.value)
    };

    updateToDoStatus = (event, id) => {
        this.props.updateTodo(id, null, event.target.value)
    };

    handleSelected = (event, id) => {
        event.target.checked ? this.props.addSelectedTodo(id) : this.props.deleteSelectedTodo(id);
    };

    render() {
        return (
            <table>
                <tbody>
                {this.props.todos.map(item =>
                    <tr key={item.id}>
                        <td><input type="checkbox" name={item.id} onChange={event => this.handleSelected(event, item.id)}/></td>
                        <td className="item" item-id={item.id}>
                            <input type="text" defaultValue={item.name}
                            onBlur={event => this.updateToDoName(event, item.id)}
                            />
                            <select value={item.status} onChange={event => this.updateToDoStatus(event, item.id)}>
                                <option
                                    value={store.STATUS.TODO} >{store.STATUS.TODO}</option>
                                <option
                                    value={store.STATUS.DONE} >{store.STATUS.DONE}</option>
                                <option
                                    value={store.STATUS.BLOCKED} >{store.STATUS.BLOCKED}</option>
                            </select>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    componentDidMount() {
        // document.querySelectorAll('.item').forEach(input => input.addEventListener('focusout', this.updateToDoList.bind(this)))
    }
}

export default ToDoList;