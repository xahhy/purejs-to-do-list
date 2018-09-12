import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'
import {addSelectedTodo, deleteSelectedTodo, updateTodo} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (id, name, status) => dispatch(updateTodo(id, name, status)),
    addSelectedTodo: id => dispatch(addSelectedTodo(id)),
    deleteSelectedTodo: id => dispatch(deleteSelectedTodo(id))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList)
