class User {
  constructor(firstName = 'John', lastName = 'Doe', loggedIn = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loggedIn = loggedIn;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(name) {
    const names = name.trim().split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  static countUser() {
    let counter = 0;
    users.forEach(user => counter ++)
    if(counter > 0) {
      return 'there are  ' + counter + ' Users';
    }
    else{
    return 'There are no users'
  }}
  static clearUsers() {
    users = [];
  }

}
const createUser = (firstName , lastName) => {
  if(firstName && lastName)
  return new User(firstName, lastName);
  else
  console.log('Du måste ha ett namn')
}

 const user1 = createUser('Joakim', 'Whalström');
 const user2 = createUser('Hans', 'ML');
 const user3 = createUser('Jeanette', 'W');

let users =  [user1, user2, user3];

//  const user1 = createUser('Joakim');

// const user2 = new User

// console.log(user1)
// console.log(user2)
// console.log(user1.fullName)
// user1.fullName = 'Hans Mattin-Lassei';

// console.log(User.countUser());
// User.clearUsers();
// console.log(User.countUser());

class Admin extends User {
  // constructor(name1, name2, loggedIn) {     // om vi inte lägger till någon constructor så kommer den använda constructorn från 
  //   super(name1, name2, loggedIn)          // super klassen automatiskt. det är dock best practice att alltdi använda en konstruktor
  // }

  removeUser(user) {
    users = users.filter(u => u.lastName !== user.lastName)
  }
}

const admin = new Admin('Joakim', 'Whalström');

// console.log(admin)

admin.removeUser(user2);
// console.log(users);
// console.log(User.countUser());


class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  gearBox = 0;

  gearUp() {
    this.gearBox ++
    console.log(`shifted to ${this.gearBox} gear`) 
    return this                                                   // med return this så kan du chaina dina metoder i en klass så som 
  }

  gearDown() {
    this.gearBox --
    console.log(`shifted to ${this.gearBox} gear`) 
    return this
  }

}

const fiat = new Car('punto', 'pink');

fiat.gearUp().gearUp().gearUp()                                     //HÄR NERE !!!!!!!!

console.log(fiat);