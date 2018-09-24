import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import {addTodo, deleteTodos, updateTodos} from '../../../actions/index';

const mapStateToProps = (state, ownProps) => ({
    selected: state.selected,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: name => dispatch(addTodo(name)),
    updateTodos: (todos) => dispatch(updateTodos(todos))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ActionButtons)
