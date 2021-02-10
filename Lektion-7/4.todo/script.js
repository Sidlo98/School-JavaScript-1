let todos = [
  {
    id: '1',
    title: 'Todo One',
    completed: false
  },
  {
    id: '2',
    title: 'Todo Two',
    completed: false
  },
  {
    id: '3',
    title: 'Todo Three',
    completed: false
  },
  {
    id: '4',
    title: 'Todo Four',
    completed: false
  }
]

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#todos');

const listTodos = () => {
  output.innerHTML = '';

  todos.forEach(todo => {
    output.innerHTML += `
    <div id="${todo.id}" class="border rounded bg-white p-2 d-flex justify-content-between align-items-center mb-2">
        <h3>${todo.title}</h3>
        <button class="btn btn-danger">X</button>
      </div>
    `
  })
}

listTodos();

form.addEventListener('submit', e => {
  e.preventDefault();

  // if(input.value.trim() === '')
  //   return

  if(input.value.trim() !== '') {

  let todo = {
    id: Date.now().toString(),
    title: input.value,
    completed: false
  }

  todos.push(todo);

  listTodos();

  input.value = ''
} 
else {
  input.classList.add('is-invalid');
} 

})

input.addEventListener('keyup', () => {
  if(input.value.trim() !== '') {
    input.classList.remove('is-invalid');
  }
  else {
    input.classList.add('is-invalid');
  }
})

output.addEventListener('click', e => {
  // console.log(e.target.parentNode);
  if(e.target.classList.contains('btn')) {
    // console.log(e.target.classList);
    todos = todos.filter(todo => todo.id !== e.target.parentNode.id)
    listTodos();
  }
})