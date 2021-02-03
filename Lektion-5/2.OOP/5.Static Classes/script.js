/* 
  statiska klasser / service klasser
*/

// det "Vanliga" sättet.. kräver en instansering av objektet

// class UserService {
//   constructor(uri) {
//     this.baseuri = uri;
//   }

//   signUp(user) {
//     console.log('Regisrating the user.')
//     console.log(user)
//   }

//   signIn(email, password) {
//     console.log(`Signing in the user with ${email} and ${password}`)
//   }
// }

// const userService = new UserService()
// userService.signUp({firstName: 'Joakim', lastName: 'Wahlström'})
// userService.signIn('Joakim@mail.com', 'bymig123')

// const userSignUp = (user) => {
//   console.log('Regisrating the user.')
//   console.log(user)
// }

// const userSignIn = (email, password) => {
//   console.log(`Signing in the user with ${email} and ${password}`)
// }

// const userAdminSignUp = (user) => {
//   console.log('Regisrating a new admin user.')
//   console.log(user)
// }

// const adminSignIN = (user) => {
//   console.log(`Signing in the admin with ${email} and ${password}`)
// }

// userSignUp({firstName: 'Joakim', lastName: 'Wahlström'})
// userSignIn('Joakim@mail.com', 'bymig123')


// statisk klass - kräver inte att man gör en instans av objektet

class UserService {
  constructor(uri) {
    this.baseUri = uri;
  }

  static signUp(user) {
    console.log('Registrating the user.');
    console.log(user);
  }

  static signIn(email, password) {
    console.log(`Signing in the user with ${email} and ${password}`);
  }
}

UserService.signUp({firstName:' Joakim', lastName: 'Wahlström'});
UserService.signIn('Joakim@mail.com', 'bytmig123');

class AdminService {
  constructor(uri) {
    this.baseUri = uri;
  }

  static signUp(user) {
    console.log('Registrating a new admin user.');
    console.log(user);
  }

  static signIn(email, password) {
    console.log(`Signing in the Admin with ${email} and ${password}`);
  }
}

AdminService.signUp({firstName:' Joakim', lastName: 'Wahlström'});
AdminService.signIn('Joakim@mail.com', 'bytmig123');