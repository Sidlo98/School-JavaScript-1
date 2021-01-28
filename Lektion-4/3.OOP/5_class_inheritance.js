class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  loggedIn = false;
  login() {
    this.loggedIn = true;
    console.log(`${this.firstName} has logged in`)
  }
}

const user1 = new User('Hans', 'Mattin-Lassei');
const user2 = new User('Jeanette', 'Wankowicz');
const user3 = new User('Haitem', 'Simrani');

let users = [user1, user2, user3];

// user2.login()
// user3.login()

class Admin extends User {
  //Om vi inte lägger in en konstruktor så används den i User
  removeUser(user) {
    users = users.filter(_user => {
      return _user.firstName != user.firstName
    })
  }
}

const admin = new Admin('Joakim', 'Wahlström');

// user2.removeUser(user1);
// console.log(users);
// admin.removeUser(user1);
// console.log(users);

// admin.login();


class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(1)
    console.log(2)
    console.log(3)
    return `${this.name}makes a generic sound!`;
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

class Cat extends Animal {
  constructor(name, color, race) {
    super(name);
    this.race = race;
  }
  pur() {
    return `${this.name} is purring!`
  }
  makeSound() {
    super.makeSound()
    let sound = super.makeSound()
    console.log(`${this.name} is purring!`, sound) 
  }
}

const dog = new Dog('fido', 3);
const cat = new Cat('Diva', 'Norsk Skogkatt');
console.log(dog.makeSound());
console.log(dog.age);
console.log(cat);
cat.makeSound();