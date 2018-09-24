import React from 'react';
import {
    Table, TableBody, TableRow, TableCell, Paper,TablePagination,
    TableHead, Button, Chip, Tooltip, TableSortLabel
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {fetchAllTodosAPI, deleteTodoAPI, fetchAllTagsAPI} from '../../../api'
import {generateSearchQuery, STATUS} from '../../../utils';

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
    {id: 'dueDate', enableSort: true, disablePadding: true, label: 'DueDate'},
    {id: 'status', enableSort: true, disablePadding: true, label: 'Status'},
    {id: 'actions', enableSort: false, disablePadding: true, label: 'Actions'}
];

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        fetchAllTodosAPI(props.updateTodos, generateSearchQuery(props.filter));
        fetchAllTagsAPI(props.updateAllTags);
    }
    handleChangeRowsPerPage = (event) => {

    };

    handleChangePage = (event, page) => {

    };

    handleDeleteTodo = (id) => {
        // this.props.deleteTodos([id])
        let updateTodos = this.props.updateTodos;
        deleteTodoAPI(id).then(response => fetchAllTodosAPI(updateTodos));
    };

    handleClickDetail = (todo) => {
        this.props.setCurrentTodoForDetail(todo);
        this.props.toggleDetail(true);
    };

    createSortHandler = (property) => {
        console.log(property);
        let direction = 'desc';
        if (this.props.filter.orderBy === property && this.props.filter.order === 'desc') {
            direction = 'asc';
        }
        this.props.updateSortRule(property, direction, (filter) => fetchAllTodosAPI(this.props.updateTodos, generateSearchQuery(filter)));
    };

    render() {
        const {classes, tags, todos, page} = this.props;
        const {order, orderBy} = this.props.filter;
        return (
            <Paper>
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
                                                    onClick={() => this.createSortHandler(row.id)}
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
                        {todos.map(item =>
                            <TableRow key={item.id} className={classes.row}>
                                <TableCell className="item" item-id={item.id} padding='none'>
                                    {item.name}
                                </TableCell>
                                <TableCell>
                                    {item.tags && item.tags.map(tagId => tags.find(tag => tag.id === tagId)).map(tag => (
                                        <Chip key={tag.id} label={tag.name}/>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    {item.dueDate}
                                </TableCell>
                                <TableCell padding='none'>
                                    {STATUS[item.status]}
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
                <TablePagination
                    component="div"
                    count={page.totalElements}
                    rowsPerPage={page.size}
                    page={page.number}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        )
    }
}

export default withStyles(styles)(TodoList);