import Search from './Search';
import {connect} from 'react-redux';
import {filterByName} from '../../../actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch)=>({
    filterByName: keyWord => dispatch(filterByName(keyWord))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
