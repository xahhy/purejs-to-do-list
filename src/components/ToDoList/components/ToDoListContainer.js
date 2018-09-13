import { connect } from 'react-redux'
import ToDoList from './ToDoList'
import {addSelectedTodo, addTodo, deleteSelectedTodo, deleteTodos, updateTodo} from '../../../actions/index';

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (id, name, status) => dispatch(updateTodo(id, name, status)),
    addSelectedTodo: id => dispatch(addSelectedTodo(id)),
    deleteSelectedTodo: id => dispatch(deleteSelectedTodo(id)),
    deleteTodos: todos => dispatch(deleteTodos(todos)),
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList)
