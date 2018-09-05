import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import Model from './Model';

const startup = () => {
  const toDoListModel = new Model();
  new ActionButtons(toDoListModel).render(document.getElementById('action-buttons'));
  new BarChart(toDoListModel).render(document.getElementById('bar-chart'));
  new ToDoList(toDoListModel).render(document.getElementById('to-do-list'));
};

startup();