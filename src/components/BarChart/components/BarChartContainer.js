import { connect } from 'react-redux'
import FilteredBarChart from './FilteredBarChart'

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    login: state.login
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps
)(FilteredBarChart)
