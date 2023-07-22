import './style.css';
import TaskManager from './taskManager.js';

const taskManager = new TaskManager();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('.input-list');
  taskManager.addNewTask(input.value);
  input.value = '';
});

const xbtn = document.getElementById('xbtn');
xbtn.addEventListener('click', () => {
  taskManager.deleteCompletedTasks();
});

window.onload = () => {
  taskManager.renderTasks();
};
