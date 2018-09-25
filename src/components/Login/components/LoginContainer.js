import LoginView from './LoginView'
import {connect} from 'react-redux'
import {loginWith} from '../../../actions';
import {loginUseJWTAPI} from '../../../api';


const mapStateToProps = (state) => ({
    login: state.login
});
const mapDispatchToProps = (dispatch) => ({
    loginWith: (username, password) => {
        loginUseJWTAPI(username, password).then(login=>dispatch(loginWith(login)))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);