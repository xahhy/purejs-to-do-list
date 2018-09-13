import {updateTodo} from '../../../actions/index';
import React from 'react';
import store from '../../../store/index';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import TextField from '@material-ui/core/TextField/TextField';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const styles = theme => ({
    table: {
        maxWidth: 1000
    }
});

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
        const {classes} = this.props;
        return (
            <Table className={classes.table}>
                <TableBody>
                    {this.props.todos.map(item =>
                        <TableRow key={item.id}>
                            <TableCell padding='checkbox'>
                                <Checkbox
                                    onChange={event => this.handleSelected(event, item.id)}
                                />
                            </TableCell>
                            <TableCell className="item" item-id={item.id} padding='none'>
                                <TextField placeholder={'Please add something todo...'}
                                           onBlur={event => this.updateToDoName(event, item.id)}
                                           fullWidth={true}
                                />
                            </TableCell>
                            <TableCell padding='none'>
                                <Select
                                    value={item.status}
                                    onChange={event => this.updateToDoStatus(event, item.id)}
                                >
                                    <MenuItem value={store.STATUS.TODO}>{store.STATUS.TODO}</MenuItem>
                                    <MenuItem value={store.STATUS.DONE}>{store.STATUS.DONE}</MenuItem>
                                    <MenuItem value={store.STATUS.BLOCKED}>{store.STATUS.BLOCKED}</MenuItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        )
    }

    componentDidMount() {
        // document.querySelectorAll('.item').forEach(input => input.addEventListener('focusout', this.updateToDoList.bind(this)))
    }
}

export default withStyles(styles)(ToDoList);