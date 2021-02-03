

class UserService {
  constructor() {}

  static signUp(userObj) {
    console.log(`registrating the user ${userObj.firstName}.`);
    setTimeout(() => {
      console.log(userObj);
    },1000)
  }

  static signIn(email, passWord) {
    console.log('Signing in the user');
    setTimeout(() => {
      console.log(email, passWord);
    },1000)
  }
}


export default UserService ;