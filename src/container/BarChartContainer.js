import { connect } from 'react-redux'
import BarChart from '../components/BarChart'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps
)(BarChart)
