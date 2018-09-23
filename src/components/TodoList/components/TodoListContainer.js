import { connect } from 'react-redux'
import FilteredTodoList from './FilteredTodoList'
import {
    addSelectedTodo,
    addTodo,
    deleteSelectedTodo,
    deleteTodos,
    toggleDetail,
    updateTodo,
    setCurrentTodoForDetail, updateTodos, updateSortRule, updateAllTags
} from '../../../actions';

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    tags: state.tags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    addSelectedTodo: id => dispatch(addSelectedTodo(id)),
    deleteSelectedTodo: id => dispatch(deleteSelectedTodo(id)),
    deleteTodos: todos => dispatch(deleteTodos(todos)),
    toggleDetail: show => dispatch(toggleDetail(show)),
    setCurrentTodoForDetail: todo => dispatch(setCurrentTodoForDetail(todo)),
    updateTodos: (todos) => dispatch(updateTodos(todos)),
    updateSortRule: (property) => dispatch(updateSortRule(property)),
    updateAllTags: (tags) => dispatch(updateAllTags(tags))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(FilteredTodoList)
