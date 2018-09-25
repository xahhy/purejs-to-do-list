import React from 'react';
import Card from '@material-ui/core/Card/Card';
import {
    TextField,CardContent,CardActions,Button
} from '@material-ui/core';

import Login from '../../../data/Login';
import {Redirect} from 'react-router-dom';
import {loginUseJWTAPI} from '../../../api';

const styles = {
    card: {
        maxWidth: 345
    }
};

class LoginView extends React.Component {
    handleLogin = () => {
        this.props.loginWith(this.usernameRef.value, this.passwordRef.value);
    };
    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        if (this.props.login.isLogin && from.pathname !== '/logout') {
            return <Redirect to={from}/>
        }
        return (
            <Card style={styles.card}>
                <CardContent>
                    <TextField
                        id='username'
                        label='username'
                        placeholder='Please enter username here'
                        fullWidth={true}
                        inputRef={ref=>this.usernameRef = ref}
                    />
                    <TextField
                        id='password'
                        type='password'
                        label='password'
                        fullWidth={true}
                        inputRef={ref=>this.passwordRef = ref}
                    />
                </CardContent>
                <CardActions style={{justifyContent: 'flex-end'}}>
                    <Button>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={this.handleLogin}>
                        Ok
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default LoginView;