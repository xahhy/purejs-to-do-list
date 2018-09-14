import React from 'react'
import store from '../../../store/index';
import {groupBy} from '../../../utils/index';
import {Pie} from 'react-chartjs-2';

class BarChart extends React.Component {

    getBarChartData = (groupedModel) => {
        let TODONumber = groupedModel[store.STATUS.TODO] ? groupedModel[store.STATUS.TODO].length : 0;
        let DONENumber = groupedModel[store.STATUS.DONE] ? groupedModel[store.STATUS.DONE].length : 0;
        let BLOCKEDNumber = groupedModel[store.STATUS.BLOCKED] ? groupedModel[store.STATUS.BLOCKED].length : 0;
        return {
            TODONumber, DONENumber, BLOCKEDNumber
        }
    };

    render() {
        console.log(this.props.todos);
        const {TODONumber, DONENumber, BLOCKEDNumber} = this.getBarChartData(groupBy(this.props.todos, 'status'));
        const chartData = [
            {
                value: TODONumber,
                color: '#F7464A',
                highlight: '#FF5A5E',
                label: 'TODO'
            },
            {
                value: DONENumber,
                color: '#46BFBD',
                highlight: '#5AD3D1',
                label: 'DONE'
            },
            {
                value: BLOCKEDNumber,
                color: '#FDB45C',
                highlight: '#5AD3D1',
                label: 'BLOCKED'
            },
        ];

        const chartOptions = {
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    display: true,
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: "Chore Distribution for this Month",
                fontFamily: "Roboto",
                fontSize: 20,
            }
        };
        const data = {
            labels: [
                'TODO',
                'DONE',
                'BLOCKED'
            ],
            datasets: [{
                data: [TODONumber, DONENumber, BLOCKEDNumber],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
        return (
            <Pie data={data} width="600" height="250"/>
        );
    }
}

export default BarChart;