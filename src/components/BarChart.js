import React from 'react'
import store from '../store';
import {groupBy} from '../utils';

class BarChart extends React.Component{

    getBarChartData = (groupedModel) => {
        let TODONumber = groupedModel[store.STATUS.TODO] ? groupedModel[store.STATUS.TODO].length : 0;
        let DONENumber = groupedModel[store.STATUS.DONE] ? groupedModel[store.STATUS.DONE].length : 0;
        let BLOCKEDNumber = groupedModel[store.STATUS.BLOCKED] ? groupedModel[store.STATUS.BLOCKED].length : 0;
        return {
            TODONumber,DONENumber,BLOCKEDNumber
        }
    };

    render() {
        console.log(this.props.todos);
        const {TODONumber,DONENumber,BLOCKEDNumber} = this.getBarChartData(groupBy(this.props.todos, 'status'));
        return (<div>
            <div>{TODONumber}</div>
            <div>{DONENumber}</div>
            <div>{BLOCKEDNumber}</div>
        </div>)
    }
}

export default BarChart;