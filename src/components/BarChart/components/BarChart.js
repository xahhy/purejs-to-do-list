import React from 'react'
import {groupBy} from '../../../utils/index';
import {Pie} from 'react-chartjs-2';
import {STATUS} from '../../../utils';

class BarChart extends React.Component {

    getBarChartData = (groupedModel) => {
        let TODONumber = groupedModel['TODO'] ? groupedModel['TODO'].length : 0;
        let DONENumber = groupedModel['IN_PROGRESS'] ? groupedModel['IN_PROGRESS'].length : 0;
        let BLOCKEDNumber = groupedModel['BLOCKED'] ? groupedModel['BLOCKED'].length : 0;
        return {
            TODONumber, DONENumber, BLOCKEDNumber
        }
    };

    render() {
        const {TODONumber, DONENumber, BLOCKEDNumber} = this.getBarChartData(groupBy(this.props.todos, 'status'));
        const chartOptions = {
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    display: true,
                    color: 'white'
                }
            },
            // title: {
            //     display: true,
            //     text: "Chore Distribution for this Month",
            //     fontFamily: "Roboto",
            //     fontSize: 20,
            // }
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
                    '#F7464A',
                    '#8d4dff'
                ],
                hoverBackgroundColor: [
                    '#33eb14',
                    '#F7464A',
                    '#8d4dff'
                ]
            }]
        };
        return (
            <div>
                <Pie data={data} width={500} height={250} options={chartOptions}/>
            </div>
        );
    }
}

export default BarChart;