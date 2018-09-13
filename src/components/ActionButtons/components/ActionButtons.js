import {addTodo} from '../../../actions/index';
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});
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
        const { classes } = this.props;
        return (
            <div>
                <Button variant='contained' color='primary' className={classes.button} onClick={this.addItemCallback}>Add</Button>
                <Button variant='contained' color='secondary' className={classes.button} onClick={this.deleteItemsCallback}>Delete</Button>
            </div>
        )
    }
}

export default withStyles(styles)(ActionButtons);