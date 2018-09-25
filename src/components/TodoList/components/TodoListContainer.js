import {connect} from 'react-redux'
import FilteredTodoList from './FilteredTodoList'
import {
    addSelectedTodo,
    addTodo,
    deleteSelectedTodo,
    deleteTodos,
    toggleDetail,
    updateTodo,
    setCurrentTodoForDetail, updateTodos, updateSortRule, updateAllTags, updateFilter
} from '../../../actions';
import {deleteTodoAPI, fetchAllTagsAPI, fetchAllTodosAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    tags: state.tags,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    addSelectedTodo: id => dispatch(addSelectedTodo(id)),
    deleteSelectedTodo: id => dispatch(deleteSelectedTodo(id)),
    deleteTodos: (todos, filter) => {
        return Promise.all(todos.map(todo=>deleteTodoAPI(todo)))
            .then(response=>fetchAllTodosAPI(generateSearchQuery(filter)))
            .then(response => dispatch(updateTodos(response)));
    },
    toggleDetail: show => dispatch(toggleDetail(show)),
    setCurrentTodoForDetail: todo => dispatch(setCurrentTodoForDetail(todo)),
    updateTodos: (filter) => {
        fetchAllTodosAPI(generateSearchQuery(filter)).then(response => dispatch(updateTodos(response)));
    },
    updateSortRule: (property, direction, callback) => dispatch(updateSortRule(property, direction, callback)),
    updateAllTags: () => {
        fetchAllTagsAPI().then(tags => dispatch(updateAllTags(tags)));
    },
    updateFilter: (page, size) => dispatch(updateFilter(page, size))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(FilteredTodoList)
