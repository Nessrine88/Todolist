const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};


const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const renderTasks=()=> {
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
  event.stopPropagation();
  optionIcon.classList.replace('fa-ellipsis-vertical', 'fa-trash-can');
  li.style.backgroundColor = '#FFF9C4';
  const trashIcon = li.querySelector('.fa-trash-can');
  trashIcon.addEventListener('click', () => {
  ul.removeChild(li);
  tasks = tasks.filter((item) => item.index !== task.index);
  tasks.forEach((task, index) => {
  task.index = index + 1;
    });
        saveTasksToLocalStorage();
        renderTasks();
      });
    });

    const checkbox = li.querySelector('.checkbox');
    checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
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

export const editPost=(li, task)=> {
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
}

export const addNewTask=(description)=> {
  const newTaskDescription = description.trim();
  if (newTaskDescription !== '') {
    const newTask = { description: newTaskDescription, completed: false, index: tasks.length + 1 };
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
}
}

export const xbtn = document.getElementById('xbtn');
export const clearBtn=() => {
 tasks = tasks.filter((task) => !task.completed);
 tasks.forEach((task, index) => {
   task.index = index +1;
 });
 saveTasksToLocalStorage();
 renderTasks();
}
