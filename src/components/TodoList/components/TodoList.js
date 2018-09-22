import React from 'react';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import {withStyles} from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead/TableHead';
import Button from '@material-ui/core/Button/Button';
import Chip from '@material-ui/core/Chip/Chip';
import {fetchAllTodos} from '../../../api'

const styles = theme => ({
    table: {
        // maxWidth: 1000,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        fetchAllTodos(props.updateTodos);
    }

    handleDeleteTodo = (id) => {
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
                        <TableRow key={item.id} className={classes.row}>
                            <TableCell className="item" item-id={item.id} padding='none'>
                                {item.name}
                            </TableCell>
                            <TableCell>
                                {item.tags && item.tags.map(value => (
                                    <Chip key={value} label={value}/>
                                ))}
                            </TableCell>
                            <TableCell>
                                {item.dueDate}
                            </TableCell>
                            <TableCell padding='none'>
                                {item.status}
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary'
                                        onClick={() => this.handleClickDetail(item)}
                                >
                                    Details
                                </Button>
                                <Button variant='contained' color='secondary'
                                        onClick={() => this.handleDeleteTodo(item.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        )
    }
}

export default withStyles(styles)(TodoList);