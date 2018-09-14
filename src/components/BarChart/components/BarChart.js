import React from 'react'
import {groupBy} from '../../../utils/index';
import {Pie} from 'react-chartjs-2';
import {STATUS} from '../../../utils';

class BarChart extends React.Component {

    getBarChartData = (groupedModel) => {
        let TODONumber = groupedModel[STATUS.TODO] ? groupedModel[STATUS.TODO].length : 0;
        let DONENumber = groupedModel[STATUS.IN_PROGRESS] ? groupedModel[STATUS.IN_PROGRESS].length : 0;
        let BLOCKEDNumber = groupedModel[STATUS.BLOCKED] ? groupedModel[STATUS.BLOCKED].length : 0;
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
                label: 'IN_PROGRESS'
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
                'In progress',
                'Blocked',
                'To do'
            ],
            datasets: [{
                data: [DONENumber, BLOCKEDNumber, TODONumber],
                backgroundColor: [
                    '#33eb14',
                    '#FF6384',
                    '#8d4dff'
                ],
                hoverBackgroundColor: [
                    '#33eb14',
                    '#FF6384',
                    '#8d4dff'
                ]
            }]
        };
        return (
            <Pie data={data} width={600} height={250} options={{
                maintainAspectRatio: false
            }}/>
        );
    }
}

export default BarChart;