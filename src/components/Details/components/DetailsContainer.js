import Details from './Details';
import {connect} from 'react-redux';
import {
    addSelectedTodo,
    deleteSelectedTodo,
    deleteTodos,
    toggleDetail,
    updateTodo,
    updateTodos
} from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    details: state.details,
    tags: state.tags,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    toggleDetail: show => dispatch(toggleDetail(show)),
    updateTodos: (todos) => dispatch(updateTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details)
