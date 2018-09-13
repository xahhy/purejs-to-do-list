import { connect } from 'react-redux'
import BarChart from './BarChart'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps
)(BarChart)
