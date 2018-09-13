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
import TableHead from '@material-ui/core/TableHead/TableHead';
import Button from '@material-ui/core/Button/Button';
import Chip from '@material-ui/core/Chip/Chip';

const styles = theme => ({
    table: {
        maxWidth: 1000
    }
});

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    updateToDoName = (event, item) => {
        item.name = event.target.value;
        this.props.updateTodo(item)
    };

    updateToDoStatus = (event, item) => {
        item.status = event.target.value;
        this.props.updateTodo(item)
    };

    deleteTodo = (id) => {
        this.props.deleteTodos([id])
    };

    handleClickDetail = (todo) => {
        this.props.setCurrentTodoForDetail(todo);
        this.props.toggleDetail(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Tags</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.todos.map(item =>
                        <TableRow key={item.id}>
                            <TableCell className="item" item-id={item.id} padding='none'>
                                <TextField placeholder={'Please add something todo...'}
                                           onChange={event => this.updateToDoName(event, item)}
                                           fullWidth={true}
                                           value={item.name}
                                />
                            </TableCell>
                            <TableCell>
                                {item.tags.map(value => (
                                    <Chip key={value} label={value}/>
                                ))}
                            </TableCell>
                            <TableCell>
                                {item.dueDate}
                            </TableCell>
                            <TableCell padding='none'>
                                <Select
                                    value={item.status}
                                    onChange={event => this.updateToDoStatus(event, item)}
                                >
                                    <MenuItem value={store.STATUS.TODO}>{store.STATUS.TODO}</MenuItem>
                                    <MenuItem value={store.STATUS.DONE}>{store.STATUS.DONE}</MenuItem>
                                    <MenuItem value={store.STATUS.BLOCKED}>{store.STATUS.BLOCKED}</MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary'
                                        onClick={() => this.handleClickDetail(item)}
                                >
                                    Details
                                </Button>
                                <Button variant='contained' color='secondary'
                                        onClick={() => this.deleteTodo(item.id)}>Delete</Button>
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

export default withStyles(styles)(TodoList);