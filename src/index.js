// index.js
import './style.css';

const tasks = []; // Start with an empty array

function renderTasks() {
  const todoList = document.getElementById('todoList');
  const ul = document.querySelector('.list-container');

  tasks.sort((a, b) => a.index - b.index);

  ul.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p><input class='checkbox' type='checkbox'>${task.description}
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </p>
    `;
    const optionIcon = li.querySelector('.fa-ellipsis-vertical');
    
    optionIcon.addEventListener('click', () => {
      optionIcon.classList.replace('fa-ellipsis-vertical', 'fa-trash-can');
      li.style.backgroundColor = '#FFF9C4';
    
    
    });

    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('click', () => {
      li.classList.toggle('overline'); });
   
    ul.appendChild(li);
    
 
  });

  todoList.appendChild(ul);

};

const input = document.querySelector('.input-list');
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const newTaskDescription = input.value.trim();
  if (newTaskDescription !== '') {
    const newTask = { description: newTaskDescription, completed: false, index: tasks.length + 1 };
    tasks.push(newTask);
    renderTasks();
    input.value = '';
  }
 



});


window.onload = renderTasks();
