import {addTodo} from '../../../actions/index';
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {addTodoAPI, fetchAllTodosAPI} from '../../../api';
import Todo from '../../../data/Todo';
import {generateSearchQuery} from '../../../utils';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        // maxWidth: 1000
    }
});
class ActionButtons extends React.Component {
    constructor(props) {
        super(props);
        this.addItemCallback = this.addItemCallback.bind(this);
    }

    addItemCallback = () => {
        this.props.setCurrentTodoForDetail(new Todo());
        this.props.toggleDetail(true);
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24} className={classes.container}>
                <Button fullWidth={true} variant='contained' color='primary' className={classes.button} onClick={this.addItemCallback}>Add</Button>
            </Grid>
        )
    }
}

export default withStyles(styles)(ActionButtons);