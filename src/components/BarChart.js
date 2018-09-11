import React from 'react'
class BarChart extends React.Component{
    constructor(props) {
        super(props);
    }

    getBarChartData() {
        let groupedModel = this.store.groupBy('status');
        let TODONumber = groupedModel[this.store.STATUS.TODO] ? groupedModel[this.store.STATUS.TODO].length : 0;
        let DONENumber = groupedModel[this.store.STATUS.DONE] ? groupedModel[this.store.STATUS.DONE].length : 0;
        let BLOCKEDNumber = groupedModel[this.store.STATUS.BLOCKED] ? groupedModel[this.store.STATUS.BLOCKED].length : 0;
        return {
            TODONumber,DONENumber,BLOCKEDNumber
        }
    }

    render() {
        let {TODONumber,DONENumber,BLOCKEDNumber} = this.getBarChartData();
        return (<div>
            <div>{TODONumber}</div>
            <div>{DONENumber}</div>
            <div>{BLOCKEDNumber}</div>
        </div>)
    }
}

export default BarChart;