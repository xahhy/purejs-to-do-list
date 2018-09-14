import Search from './Search';
import {connect} from 'react-redux';
import {filterByDate, filterByName} from '../../../actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, ownProps)=>({
    filterByName: keyWord => dispatch(filterByName(keyWord)),
    filterByDate: (startDate, endDate) => dispatch(filterByDate(startDate, endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
