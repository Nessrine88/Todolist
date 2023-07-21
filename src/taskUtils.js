// taskUtils.js

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
import { renderTasks } from "./taskRenderer";
export const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const getTasks = () => {
  return tasks;
};

export const editPost = (li, task) => {
  const p = li.querySelector('p');
  const currentDescription = task.description;

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = currentDescription;

  p.replaceWith(inputField);
  inputField.focus();

  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      task.description = inputField.value.trim();
      saveTasksToLocalStorage();
      renderTasks();
    }
  });

  inputField.addEventListener('blur', () => {
    task.description = inputField.value.trim();
    saveTasksToLocalStorage();
    renderTasks();
  });
};

export const addNewTask = (description) => {
  const newTaskDescription = description.trim();
  if (newTaskDescription !== '') {
    const newTask = { description: newTaskDescription, completed: false, index: tasks.length + 1 };
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
  }
};

export let clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.index = index + 1; 
  });
  saveTasksToLocalStorage();
};
