import React from 'react';
import Card from '@material-ui/core/Card/Card';
import {
    TextField,CardContent,CardActions,Button
} from '@material-ui/core';

const styles = {
    card: {
        maxWidth: 345
    }
};

class Login extends React.Component {
    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                    <TextField
                        id='userName'
                        label='username'
                        placeholder='Please enter username here'
                        fullWidth={true}
                    />
                    <TextField
                        id='password'
                        type='password'
                        label='password'
                        fullWidth={true}
                    />
                </CardContent>
                <CardActions style={{justifyContent: 'flex-end'}}>
                    <Button>Cancel</Button>
                    <Button variant='contained' color='primary'>
                        Ok
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Login;