// app.js

import './style.css';
import {  addNewTask, clearCompletedTasks } from './taskUtils';
import { renderTasks } from './taskRenderer';
const input = document.querySelector('.input-list');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTask(input.value);
  input.value = '';
});



const xbtn = document.getElementById('xbtn');
xbtn.addEventListener('click', () => {
  clearCompletedTasks();
  renderTasks();
});

window.onload = () => {
  renderTasks();
};
