import Login from './Login'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    login: state.login
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Login);