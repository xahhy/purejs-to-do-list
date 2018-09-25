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
import {addTodoAPI, fetchAllTodosAPI, updateTodoAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state, ownProps) => ({
    details: state.details,
    tags: state.tags,
    filter: state.todos.filter,
    login: state.login
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo, filter, token) => {
        updateTodoAPI(todo, token).then(response=>fetchAllTodosAPI(generateSearchQuery(filter), token))
            .then(response => dispatch(updateTodos(response)));
    },
    addTodo: (todo, filter, token) => {
        addTodoAPI(todo, token).then(response=>fetchAllTodosAPI(generateSearchQuery(filter), token))
            .then(response=>dispatch(updateTodos(response)))
    },
    toggleDetail: show => dispatch(toggleDetail(show)),
    updateTodos: (filter, token) => {
        fetchAllTodosAPI(generateSearchQuery(filter), token).then(response => dispatch(updateTodos(response)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details)
