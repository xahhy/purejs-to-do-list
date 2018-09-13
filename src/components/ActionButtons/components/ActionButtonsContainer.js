import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import {addTodo, deleteTodos} from "../../../actions/index";

const mapStateToProps = (state, ownProps) => ({
    selected: state.selected
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteSelectedTodos: selected => dispatch(deleteTodos(selected)),
    addTodo: name => dispatch(addTodo(name))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ActionButtons)
