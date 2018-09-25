import { connect } from 'react-redux'
import ActionButtons from './ActionButtons'
import {addTodo, deleteTodos, updateTodos} from '../../../actions/index';
import {addTodoAPI, fetchAllTodosAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state, ownProps) => ({
    selected: state.selected,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (todo, filter) => {
        addTodoAPI(todo).then(response=>fetchAllTodosAPI(generateSearchQuery(filter)))
            .then(response=>dispatch(updateTodos(response)))
    },
    updateTodos: (filter) => {
        fetchAllTodosAPI(generateSearchQuery(filter)).then(response => dispatch(updateTodos(response)));
    }
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ActionButtons)
