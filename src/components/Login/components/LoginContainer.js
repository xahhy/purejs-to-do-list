import LoginView from './LoginView'
import {connect} from 'react-redux'
import {loginWith} from '../../../actions';


const mapStateToProps = (state) => ({
    login: state.login
});
const mapDispatchToProps = (dispatch) => ({
    loginWith: (login) => {dispatch(loginWith(login))}
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);