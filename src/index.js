import './style.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

function renderTasks() {
  const todoList = document.getElementById('todoList');
  const ul = document.querySelector('.list-container');

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <p><input class='checkbox' type='checkbox'>${task.description}
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </p>
    `;

    ul.appendChild(li);
  });

  todoList.appendChild(ul);

  const optionsIcons = document.querySelectorAll('.fa-ellipsis-vertical');
  optionsIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      icon.classList.replace('fa-ellipsis-vertical', 'fa-trash-can');
      const li = icon.parentElement.parentElement;
      li.style.backgroundColor = '#FFF9C4';
    });
  });
}

window.onload = renderTasks();
