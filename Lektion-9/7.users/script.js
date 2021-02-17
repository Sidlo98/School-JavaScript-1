const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

const users = []

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.id = Date.now().toString()
    this.listener = false;
  }
}

const createUser = (firstName, lastName, email) => {
  const user = new User(firstName, lastName, email);

  users.push(user);
  // renderUsers();
  output.insertAdjacentHTML('beforeend', newUser(user))
  console.log(users);

  const u =document.querySelectorAll('#output .user')
  u.forEach(user => {

    


    if(!user.listener) {
      user.addEventListener('click', function() {
        console.log('tar bort');
        this.classList.add('slideout');
        this.addEventListener('animationend', () => this.remove());
        // setTimeout(() => {
        //   this.remove();
        // }, 500)
        // console.log(users);
      })
    }

    user.listener = true;

  })
}

const renderUsers = () => {
  output.innerHTML = '';
  users.forEach(user => {
    output.innerHTML += newUser(user);
  })
}

const newUser = (user) => {
  let template = `
    <div class="user animate" id="${user.id}">
      <div class="text">
        <h3>${user.firstName} ${user.lastName}</h3>
        <small>${user.email}</small>
      </div>
    </div>
  `
  return template
}


form.addEventListener('submit', e => {
  e.preventDefault();

  if(firstName.value !== '' && lastName.value !== '' && email.value !== '') {
    createUser(firstName.value, lastName.value, email.value);
  }

})