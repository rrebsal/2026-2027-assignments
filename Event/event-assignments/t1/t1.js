// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('dialog form');
const input = document.querySelector('dialog input');
 
function createTodoItem(item) {
  const li = document.createElement('li');
 
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed;
 
  const label = document.createElement('label');
  label.htmlFor = `todo-${item.id}`;
  label.textContent = item.task;
 
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
 
  checkbox.addEventListener('change', () => {
    const todoItem = todoList.find((t) => t.id === item.id);
    todoItem.completed = checkbox.checked;
    console.log(todoList);
  });
 
  deleteBtn.addEventListener('click', () => {
    const index = todoList.findIndex((t) => t.id === item.id);
    todoList.splice(index, 1);
    ul.removeChild(li);
    console.log(todoList);
  });
 
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
 
  return li;
}
 
todoList.forEach((item) => {
  ul.appendChild(createTodoItem(item));
});
 
addBtn.addEventListener('click', () => {
  dialog.showModal();
});
 
form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  const task = input.value.trim();
 
  if (task === '') {
    return;
  }
 
  const newId = todoList.length > 0 ? Math.max(...todoList.map((t) => t.id)) + 1 : 1;
 
  const newItem = {
    id: newId,
    task: task,
    completed: false,
  };
 
  todoList.push(newItem);
  ul.appendChild(createTodoItem(newItem));
  console.log(todoList);
 
  form.reset();
  dialog.close();
});

