import React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import TextField from '@material-ui/core/TextField/TextField';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import store from '../../../store';
import Select from '@material-ui/core/Select/Select';
import Todo from '../../../data/Todo';
import Chip from '@material-ui/core/Chip/Chip';
import Input from '@material-ui/core/Input/Input';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';

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
const tags = [
    'Meeting', 'TWU'
];
class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tags: [], todo: new Todo()};
        this.defaultDate = '2018-10-01';
    }

    handleClose = () => {
        this.setState({tags:[], todo:new Todo()});
        this.props.toggleDetail(false);
    };

    handleSave = () => {
        this.props.updateTodo({...this.state.todo});
        this.props.toggleDetail(false);
    };

    updateToDoStatus = (event) => {
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

    handleChangeTags = (event) => {
        this.state.todo.tags = event.target.value;
        this.setState({todo: this.state.todo, tags: event.target.value});
    };

    handleOnEnter = () => {
        this.setState({todo: {...this.props.details.todo}, tags: [...this.props.details.todo.tags]});
    };

    render() {
        const { classes, theme, details } = this.props;
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
                        alignItems="flex-start"
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Action"
                            value={_todo.name ? _todo.name : ''}
                            onChange={(event) => this.handleChangeTodoName(event)}
                            InputLabelProps={{ shrink: true }}
                            fullWidth={true}
                        />
                        <TextField
                            label="Due Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={this.state.todo.dueDate ? this.state.todo.dueDate : ''}
                            onChange={(event) => this.handleChangeTodoDueDate(event)}
                            fullWidth={true}
                        />
                        <InputLabel shrink htmlFor="status-label-placeholder">
                            Status
                        </InputLabel>
                        <Select
                            value={_todo.status}
                            onChange={event => this.updateToDoStatus(event)}
                            input={<Input id="status-label-placeholder"/>}
                            fullWidth={true}
                        >
                            <MenuItem value={store.STATUS.TODO}>{store.STATUS.TODO}</MenuItem>
                            <MenuItem value={store.STATUS.DONE}>{store.STATUS.DONE}</MenuItem>
                            <MenuItem value={store.STATUS.BLOCKED}>{store.STATUS.BLOCKED}</MenuItem>
                        </Select>
                        <InputLabel shrink htmlFor="select-multiple-tags">
                            Tags
                        </InputLabel>
                        <Select
                            multiple
                            value={this.state.tags}
                            onChange={this.handleChangeTags}
                            input={<Input id="select-multiple-tags"/>}
                            renderValue={selected => (
                                <div>
                                    {selected.map(value => (
                                        <Chip key={value} label={value}/>
                                    ))}
                                </div>
                            )}
                            fullWidth={true}
                        >{
                            tags.map(name =>
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={{
                                        fontWeight:
                                            this.state.tags.indexOf(name) === -1
                                                ? theme.typography.fontWeightRegular
                                                : theme.typography.fontWeightMedium,
                                    }}
                                >
                                    {name}
                                </MenuItem>
                            )
                        }
                        </Select>
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

export default withStyles(styles, { withTheme: true })(Details);