import Search from './Search';
import {connect} from 'react-redux';
import {filterByDate, filterByName, filterByTags} from '../../../actions';

const mapStateToProps = (state) => ({
    tags: state.tags
});

const mapDispatchToProps = (dispatch, ownProps)=>({
    filterByName: keyWord => dispatch(filterByName(keyWord)),
    filterByDate: (startDate, endDate) => dispatch(filterByDate(startDate, endDate)),
    filterByTags: tags => dispatch(filterByTags(tags))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
