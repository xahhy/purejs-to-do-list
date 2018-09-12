import {getTodoChart} from "../actions";

const barChart = (status = {}, action) => {
    switch (action.type) {
        case 'GET_TODO_CHART':
            status = action.chart;
    }
    return status;
};
export default barChart;