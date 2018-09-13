import { connect } from 'react-redux'
import FilteredTodoList from './FilteredTodoList'
import {
    addSelectedTodo,
    addTodo,
    deleteSelectedTodo,
    deleteTodos,
    toggleDetail,
    updateTodo,
    setCurrentTodoForDetail
} from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    addSelectedTodo: id => dispatch(addSelectedTodo(id)),
    deleteSelectedTodo: id => dispatch(deleteSelectedTodo(id)),
    deleteTodos: todos => dispatch(deleteTodos(todos)),
    toggleDetail: show => dispatch(toggleDetail(show)),
    setCurrentTodoForDetail: todo => dispatch(setCurrentTodoForDetail(todo))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(FilteredTodoList)
