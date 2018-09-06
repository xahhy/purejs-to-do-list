class BarChart {
    constructor(model, container) {
        this.model = model;
        this.container = container;
    }

    getBarChartData() {
        let groupedModel = this.model.groupBy('status');
        let TODONumber = groupedModel[this.model.status.TODO] ? groupedModel[this.model.status.TODO].length : 0;
        let DONENumber = groupedModel[this.model.status.DONE] ? groupedModel[this.model.status.DONE].length : 0;
        let BLOCKEDNumber = groupedModel[this.model.status.BLOCKED] ? groupedModel[this.model.status.BLOCKED].length : 0;
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