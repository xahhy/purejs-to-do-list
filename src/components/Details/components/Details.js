import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Todo from '../../../data/Todo';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import {generateSearchQuery, STATUS} from '../../../utils';
import {fetchAllTodosAPI, updateTodoAPI} from '../../../api';
import {updateTodos} from '../../../actions';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tags: [], todo: new Todo()};
    }

    handleClose = () => {
        this.setState({tags: [], todo: new Todo()});
        this.props.toggleDetail(false);
    };

    handleSave = () => {
        const todo = this.state.todo;
        if(todo.id !== undefined){
            this.props.updateTodo({...this.state.todo}, this.props.filter, this.props.login.token);
        }else {
            this.props.addTodo(todo, this.props.filter, this.props.login.token);
        }
        this.props.toggleDetail(false);
    };

    handleChangeToDoStatus = (event) => {
        this.state.todo.status = event.target.value;
        this.setState({todo: this.state.todo});
    };

    handleChangeTodoName = (event) => {
        this.state.todo.name = event.target.value;
        this.setState({todo: this.state.todo});
    };

    handleChangeTodoDueDate = (event) => {
        this.state.todo.dueDate = event.target.value;
        this.setState({todo: this.state.todo});
    };

    handleChangeTodoTags = (event) => {
        this.state.todo.tags = event.target.value;
        this.setState({todo: this.state.todo, tags: event.target.value});
    };

    handleOnEnter = () => {
        const {details} = this.props;
        this.setState({todo: {...details.todo}, tags: details.todo.tags ? [...details.todo.tags] : []});
    };

    render() {
        const {classes, theme, details, tags} = this.props;
        const {todo: _todo} = this.state;
        return (
            <Dialog
                open={details.show}
                onClose={this.handleClose}
                onEnter={this.handleOnEnter}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Details of Action - {details.backupTodo.name} </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can change action's details here.
                    </DialogContentText>
                    <Grid
                        container
                        direction="column"
                        spacing={16}
                    >
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                id='todoName'
                                margin="dense"
                                label='Action:'
                                value={_todo.name ? _todo.name : ''}
                                onChange={(event) => this.handleChangeTodoName(event)}
                                InputLabelProps={{shrink: true}}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='todoDueDate'
                                label="Due Date"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.todo.dueDate ? this.state.todo.dueDate : ''}
                                onChange={(event) => this.handleChangeTodoDueDate(event)}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel shrink htmlFor="todo-status">
                                Status
                            </InputLabel>
                            <Select
                                id='todoStatus'
                                value={_todo.status}
                                onChange={this.handleChangeToDoStatus}
                                input={<Input id="status-label-placeholder"/>}
                                fullWidth={true}
                                inputProps={{
                                    name: 'age',
                                    id: 'todo-status',
                                }}
                            >
                                <MenuItem value={'TODO'}>{STATUS.TODO}</MenuItem>
                                <MenuItem value={'IN_PROGRESS'}>{STATUS.IN_PROGRESS}</MenuItem>
                                <MenuItem value={'BLOCKED'}>{STATUS.BLOCKED}</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel shrink htmlFor="select-multiple-tags">Tags</InputLabel>
                            <Select
                                multiple
                                id='todoTags'
                                value={this.state.tags}
                                onChange={this.handleChangeTodoTags}
                                input={<Input id="select-multiple-tags"/>}
                                renderValue={selected => (
                                    <div>
                                        {selected.map(tagId => tags.find(tag=>tag.id === tagId)).map(tag => (
                                            <Chip key={tag.id} label={tag.name}/>
                                        ))}
                                    </div>
                                )}
                                fullWidth={true}
                            >{
                                tags.map(tag =>
                                    <MenuItem
                                        key={tag.id}
                                        value={tag.id}
                                        style={{
                                            fontWeight:
                                                this.state.tags.indexOf(tag.id) === -1
                                                    ? theme.typography.fontWeightRegular
                                                    : theme.typography.fontWeightMedium,
                                        }}
                                    >
                                        {tag.name}
                                    </MenuItem>
                                )
                            }
                            </Select>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Details);