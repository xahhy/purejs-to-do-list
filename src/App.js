import React, {Component} from 'react';
import ActionButtons from './components/ActionButtons';
import ToDoList from './components/TodoList';
import BarChart from './components/BarChart';
import Grid from '@material-ui/core/Grid/Grid';
import Details from './components/Details'
import Search from './components/Search'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Route, Switch, Link, Router, Redirect} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import Login from './components/Login';

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

class AppContainer extends Component {
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

let LoginRequiredRouter = (props => {
    const {component: Component, login, ...rest} = props;
    return (
        <Route {...rest} render={props => (
            login.isLogin ? <Component {...rest}/> :
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )}>
        </Route>
    )
});
LoginRequiredRouter = connect(({login}) => ({login}))(LoginRequiredRouter);

class App extends React.Component {
    render() {
        return (
            <Grid container justify='center' direction={'column'} alignItems={'center'} style={styles.container}>
                <Grid item>
                    <Switch>
                        <LoginRequiredRouter path='/' exact component={AppContainer}/>
                        <Route path='/login' exact component={Login}/>
                    </Switch>
                </Grid>
            </Grid>
        );
    }
}

export default App;
