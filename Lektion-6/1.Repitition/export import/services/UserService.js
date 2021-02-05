import User from '../models/User.js';

export default class UserService {
  constructor() {}

  static signUp(user) {
    const newUser = new User(user.firstName, user.lastName, user.email, user.password);
    console.log('registrating the new user');
    console.log(newUser);
  }

  static signIn(email, password) {
    console.log('Signing in the user');
    console.log(email, password);
  }


}