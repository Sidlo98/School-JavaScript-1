 import { fixName } from '../functions/Functions.js'
 export default 
 class User {
  constructor(firstName, lastName, email, passWord) {
    this.firstName = fixName(firstName); 
    this.lastName = lastName;
    this.email = email;
    this.passWord = passWord;
  }
}