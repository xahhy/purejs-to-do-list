import Search from './Search';
import {connect} from 'react-redux';
import {filterByDate, filterByName, filterByTags, filterClearAdvanced, updateTodos} from '../../../actions';
import {fetchAllTodosAPI} from '../../../api';
import {generateSearchQuery} from '../../../utils';

const mapStateToProps = (state) => ({
    tags: state.tags,
    filter: state.todos.filter,
    login: state.login
});

const mapDispatchToProps = (dispatch, ownProps)=>({
    filterByName: keyWord => dispatch(filterByName(keyWord)),
    filterByDate: (startDate, endDate) => dispatch(filterByDate(startDate, endDate)),
    filterByTags: tags => dispatch(filterByTags(tags)),
    filterClearAdvanced: () => dispatch(filterClearAdvanced()),
    updateTodos: (filter, token) => {
        fetchAllTodosAPI(generateSearchQuery(filter), token)
            .then(response => dispatch(updateTodos(response)))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
