// index.js
import './style.css';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const todoList = document.getElementById('todoList');
  const ul = document.querySelector('.list-container');

  tasks.sort((a, b) => a.index - b.index);

  ul.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <p>
        <input class='checkbox' type='checkbox' ${task.completed ? 'checked' : ''}>
        ${task.description}
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </p>
    `;

    const optionIcon = li.querySelector('.fa-ellipsis-vertical');
    optionIcon.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the event from propagating to the li element
      optionIcon.classList.replace('fa-ellipsis-vertical', 'fa-trash-can');
      li.style.backgroundColor = '#FFF9C4';
      const trashIcon = li.querySelector('.fa-trash-can');
      trashIcon.addEventListener('click', () => {
        ul.removeChild(li);
        tasks = tasks.filter((item) => item.index !== task.index);
        saveTasksToLocalStorage();
      });
    });

    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent the event from propagating to the li element
      li.classList.toggle('overline');
      task.completed = checkbox.checked;
      saveTasksToLocalStorage();
    });
    /* eslint-disable no-use-before-define */
    li.addEventListener('click', () => {
      editPost(li, task);
    });

    ul.appendChild(li);
  });

  todoList.appendChild(ul);
}

function editPost(li, task) {
  const p = li.querySelector('p');
  const currentDescription = task.description;

  // Create an input field with the current description
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = currentDescription;

  // Replace the paragraph with the input field
  p.replaceWith(inputField);
  inputField.focus();

  // Save the edited task when 'Enter' key is pressed
  inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      task.description = inputField.value.trim();
      saveTasksToLocalStorage();
      renderTasks();
    }
  });
}

function addNewTask(description) {
  const newTaskDescription = description.trim();
  if (newTaskDescription !== '') {
    const newTask = { description: newTaskDescription, completed: false, index: tasks.length + 1 };
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
  }
}

const input = document.querySelector('.input-list');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  addNewTask(input.value);
  input.value = '';
});

const xbtn = document.getElementById('xbtn');
xbtn.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasksToLocalStorage();
  renderTasks();
});

window.onload = renderTasks();
