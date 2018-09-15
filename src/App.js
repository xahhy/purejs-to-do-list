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

const styles = {
    container: {
        // maxWidth: 1000
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {tab: 0}
    }

    handleChangeTabs = (event, value) => {
        this.setState({tab: value})
    };

    render() {
        const {tab} = this.state;
        return (
            <Grid container justify='center' direction={'column'} alignItems={'center'} style={styles.container}>
                <Tabs value={this.state.tab} onChange={this.handleChangeTabs}>
                    <Tab label="To dos"/>
                    <Tab label="Statistic"/>
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
        )
    }

}

export default App;
