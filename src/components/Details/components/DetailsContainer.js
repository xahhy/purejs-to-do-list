import Details from './Details';
import {connect} from 'react-redux';
import {addSelectedTodo, deleteSelectedTodo, deleteTodos, toggleDetail, updateTodo} from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    details: state.details,
    tags: state.tags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    toggleDetail: show => dispatch(toggleDetail(show))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details)
