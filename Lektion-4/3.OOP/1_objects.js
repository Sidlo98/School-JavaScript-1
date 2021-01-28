//THIS
// console.log(this);
// const thisObj = {
//   name: 'name',
//   logThis() {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   }
// }

// thisObj.logThis();  // Den här hittar det som ligger direkt till vänster om motoden.
// thisObj.arrow();    // Den här hittar det inte pga motoden är deklarerad som en arrow function.


const obj1 = {
  id: '1',
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'Joakim@mail.com',
  loggedIn: false,
  login() {
    this.loggedIn = true
    console.log(`${this.firstName} has logged in`)
  },
  logout() {
    this.loggedIn = false
    console.log(`${this.firstName} has logged out`)
  }
}

// obj1.login()
// console.log(obj1.loggedIn)
// obj1.logout()
// console.log(obj1.loggedIn)


const obj2 = {
  id: '2',
  firstName: 'Hans',
  lastName: 'Mattin-Lassei',
  email: 'Hans@mail.com',
  loggedIn: false,
  login() {
    this.loggedIn = true
    console.log(`${this.firstName} has logged in`);
  },
  logout() {
    this.loggedIn = false;
    console.log(`${this.firstName} has logged out`);
  }
}

// obj2.login()
// console.log(obj2.loggedIn)
// obj2.logout()
// console.log(obj2.loggedIn)


/* 
  CLASS
  används när vi vill skapa fler objekt med samma mall
  klasser deklareras med Stor bokstav i början.
*/

class JsClass {}

// Om vi gör såhär skulle alla nya users heta samma sak
//det vi vill titta på är en constructor

class Class1 {
  firstName = 'Joakim'
  lastName = 'Wahlström'
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let cls1 = new Class1();
let cls2 = new Class1();
console.log(cls1.fullName());
console.log(cls2.fullName());