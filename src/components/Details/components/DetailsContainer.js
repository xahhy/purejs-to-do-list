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
import {fetchAllTodosAPI, updateTodoAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state, ownProps) => ({
    details: state.details,
    tags: state.tags,
    filter: state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo, filter) => {
        updateTodoAPI(todo).then(response=>fetchAllTodosAPI(generateSearchQuery(filter)))
            .then(response => dispatch(updateTodos(response)));
    },
    toggleDetail: show => dispatch(toggleDetail(show)),
    updateTodos: (filter) => {
        fetchAllTodosAPI(generateSearchQuery(filter)).then(response => dispatch(updateTodos(response)));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details)
