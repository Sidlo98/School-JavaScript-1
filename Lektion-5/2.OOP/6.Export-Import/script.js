import User from './models/User.js';
import UserService from './services/UserService.js';
import {validate as va, sendMessage} from './functions/Functions.js';

const user = new User('Joakim', 'Wahlström', 'Joakim@mail.com', 'bytmig123');

// console.log(user);

// UserService.signUp(user);
// UserService.signIn(user.email, user.passWord);

// if(va(user))
//   UserService.signUp(user);

va(user, u => {
  UserService.signUp(u);
})

// va();
sendMessage('123456', data => {
  console.log(data);
});