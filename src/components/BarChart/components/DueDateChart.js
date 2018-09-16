import React from 'react'
import {DUE_DATE_GROUPS, groupByDueDate} from '../../../utils';
import {Pie} from 'react-chartjs-2';

class DueDateChart extends React.Component {

    getBarChartData = (groupedModel) => {
        const OUT_OF_DATE = groupedModel[DUE_DATE_GROUPS.OUT_OF_DATE] ? groupedModel[DUE_DATE_GROUPS.OUT_OF_DATE].length : 0;
        const IN_ONE_DAY = groupedModel[DUE_DATE_GROUPS.IN_ONE_DAY] ? groupedModel[DUE_DATE_GROUPS.IN_ONE_DAY].length : 0;
        const IN_THREE_DAYS = groupedModel[DUE_DATE_GROUPS.IN_THREE_DAYS] ? groupedModel[DUE_DATE_GROUPS.IN_THREE_DAYS].length : 0;
        return {
            OUT_OF_DATE, IN_ONE_DAY, IN_THREE_DAYS
        }
    };

    render() {
        const {OUT_OF_DATE, IN_ONE_DAY, IN_THREE_DAYS} = this.getBarChartData(groupByDueDate(this.props.todos));
        const chartOptions = {
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    display: true,
                    color: 'white'
                }
            },
        };
        const data = {
            labels: [
                'Out of date',
                'In 1 day',
                'In 3 days'
            ],
            datasets: [{
                data: [OUT_OF_DATE, IN_ONE_DAY, IN_THREE_DAYS],
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
                <Pie id='due-date-pie-chart' data={data} width={500} height={250} options={chartOptions}/>
            </div>
        );
    }
}

export default DueDateChart;