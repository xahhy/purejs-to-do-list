class BarChart {
    constructor(store, container) {
        this.store = store;
        this.container = container;
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
        this.container.innerHTML = `<div>${TODONumber}</div>
<div>${DONENumber}</div>
<div>${BLOCKEDNumber}</div>`;
    }
}

export default BarChart;