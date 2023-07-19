// Array of tasks
import './style.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

// Function to render tasks
function renderTasks() {
  const todoList = document.getElementById('todoList');
  const ul = document.createElement('ul');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task.description;

    ul.appendChild(li);
  });

  todoList.appendChild(ul);
}

// Call addTask to render initial tasks
window.onload = renderTasks();
