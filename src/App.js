import React, {Component} from 'react';
import ActionButtons from './components/ActionButtons';
import ToDoList from './components/ToDoList';
import BarChart from './components/BarChart';
import Grid from '@material-ui/core/Grid/Grid';
import Details from './components/Details'
import Search from './components/Search'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Route, Switch, Link, Router} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {tab: 0}
    }

    handleChangeTabs = (event, value)=> {
        this.setState({tab: value})
    };
    render() {
        const {tab} = this.state;
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify='center' direction={'column'} alignItems={'center'}>
                        <Tabs value={this.state.tab} onChange={this.handleChangeTabs}>
                            <Tab label="To dos" component={Link} to={'/'}/>
                            <Tab label="Statistic" component={Link} to={'/statistic'}/>
                        </Tabs>
                        <Search/>
                        {
                            tab === 0 && <TabContainer>
                            <ToDoList/>
                            <ActionButtons/>
                            <Details/>
                            </TabContainer>
                        }
                        {
                            tab === 1 && <BarChart/>
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default App;
