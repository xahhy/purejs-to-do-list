import { combineReducers } from 'redux'
import todos from './todos'
import selected from './selected'
import barChart from './barChart';
import details from './details'

export default combineReducers({
    todos, selected, barChart, details
});