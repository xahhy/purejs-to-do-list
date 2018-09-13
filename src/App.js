import React, {Component} from 'react';
import ActionButtons from './components/ActionButtons';
import ToDoList from './components/ToDoList';
import BarChart from './components/BarChart';
import Grid from '@material-ui/core/Grid/Grid';
import Details from './components/Details'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify='center' direction={'column'} alignItems={'center'}>
                        {/*{[0, 1, 2].map(value => (*/}
                        {/*<Grid key={value} item>*/}
                        {/*<Paper className={classes.paper} />*/}
                        {/*</Grid>*/}
                        {/*))}*/}
                        <ActionButtons/>
                        <ToDoList/>
                        <BarChart/>
                        <Details/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
