import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import Model from './Model';
import store from './store';

const startup = () => {
    // const toDoListModel = new Model();
    new ActionButtons(store, document.getElementById('action-buttons')).render();
    const barChart = new BarChart(store, document.getElementById('bar-chart'));
    barChart.render();
    store.subscribe(barChart.render.bind(barChart));
    const toDoList = new ToDoList(store, document.getElementById('to-do-list'));
    toDoList.render();
    store.subscribe(toDoList.render.bind(toDoList));
};

startup();