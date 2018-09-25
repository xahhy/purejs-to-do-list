import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import {addTodo, deleteTodos, setCurrentTodoForDetail, toggleDetail, updateTodos} from '../../../actions/index';
import {addTodoAPI, fetchAllTodosAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state, ownProps) => ({
    selected: state.selected,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodos: (filter) => {
        fetchAllTodosAPI(generateSearchQuery(filter)).then(response => dispatch(updateTodos(response)));
    },
    toggleDetail: show => dispatch(toggleDetail(show)),
    setCurrentTodoForDetail: todo => dispatch(setCurrentTodoForDetail(todo)),
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ActionButtons)
