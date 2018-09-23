import React from 'react';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import {withStyles} from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead/TableHead';
import Button from '@material-ui/core/Button/Button';
import Chip from '@material-ui/core/Chip/Chip';
import {fetchAllTodosAPI, deleteTodoAPI} from '../../../api'
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel/TableSortLabel';

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

const rows = [
    {id: 'name', enableSort: true, disablePadding: true, label: 'Action'},
    {id: 'tags', enableSort: false, disablePadding: true, label: 'Tags'},
    {id: 'dueDate', enableSort: false, disablePadding: true, label: 'DueDate'},
    {id: 'status', enableSort: false, disablePadding: true, label: 'Status'},
    {id: 'actions', enableSort: false, disablePadding: true, label: 'Actions'}
];

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        fetchAllTodosAPI(props.updateTodos);
    }

    handleDeleteTodo = (id) => {
        // this.props.deleteTodos([id])
        let updateTodos = this.props.updateTodos;
        deleteTodoAPI(id).then(response=>fetchAllTodosAPI(updateTodos));
    };

    handleClickDetail = (todo) => {
        this.props.setCurrentTodoForDetail(todo);
        this.props.toggleDetail(true);
    };

    createSortHandler = (property) => {
        console.log(property);
        this.props.updateSortRule(property)
    };
    render() {
        const {classes, tags} = this.props;
        const {order, orderBy} = this.props.filter;
        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {
                            rows.map(row => {
                                return (
                                    <TableCell key={row.id} padding={row.disablePadding ? 'none' : 'default'}>
                                        <Tooltip title='Sort' enterDelay={300}>
                                            <TableSortLabel
                                                active={orderBy === row.id && row.enableSort}
                                                direction={order}
                                                onClick={()=>this.createSortHandler(row.id)}
                                            >
                                                {row.label}
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.todos.map(item =>
                        <TableRow key={item.id} className={classes.row}>
                            <TableCell className="item" item-id={item.id} padding='none'>
                                {item.name}
                            </TableCell>
                            <TableCell>
                                {item.tags && item.tags.map(tagId => tags.find(tag=>tag.id === tagId)).map(tag => (
                                    <Chip key={tag.id} label={tag.name}/>
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