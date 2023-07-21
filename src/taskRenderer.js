import { clearCompletedTasks,getTasks, editPost, saveTasksToLocalStorage } from './taskUtils';

export const renderTasks = () => {
  let tasks = getTasks();

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
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can');

    optionIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      optionIcon.replaceWith(trashIcon);
      li.style.backgroundColor = '#FFF9C4';
    });

    trashIcon.addEventListener('click', () => {
      tasks = tasks.filter((item) => item.index !== task.index);
      tasks.forEach((task, index) => {
        task.index = index + 1;
      });
      saveTasksToLocalStorage();
      ul.removeChild(li);
    });

    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('click', (event) => {
      event.stopPropagation();
      li.classList.toggle('overline');
      task.completed = checkbox.checked;
      saveTasksToLocalStorage();
    });

    li.addEventListener('click', () => {
      editPost(li, task);
    });

    ul.appendChild(li);
  });

  todoList.appendChild(ul);
};
