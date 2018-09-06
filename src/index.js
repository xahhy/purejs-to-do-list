import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import Model from './Model';

const startup = () => {
    const toDoListModel = new Model();
    new ActionButtons(toDoListModel, document.getElementById('action-buttons')).render();
    const barChart = new BarChart(toDoListModel, document.getElementById('bar-chart'));
    barChart.render();
    toDoListModel.subscribe(barChart.render.bind(barChart));
    const toDoList = new ToDoList(toDoListModel, document.getElementById('to-do-list'));
    toDoList.render();
    toDoListModel.subscribe(toDoList.render.bind(toDoList));
};

startup();