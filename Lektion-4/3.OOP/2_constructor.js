
// prototype constructor
function Product(name, price, desc) {
  this.productName = name
  this.price = price
  this.description = desc
}

const product1 = new Product('mjölk', 10, 'this is mjölk')

// console.log(product1);

// Classes
class User {
  constructor(firstName = 'förnamn', lastName = 'efternamn') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loggedIn = false;
    this.fullName = function() {
      console.log(this.firstName, this.lastName)
    }
  }
  login() {
    this.loggedIn = true;
    console.log(`${this.firstName} has logged in`)
  }
  logout() {
    this.loggedIn = false;
    console.log(`${this.firstName} has logged out`)
  }
}

let userOne = new User('Joakim', 'Wahlström');
let userTwo = new User()

console.log(userOne, userTwo)

userOne.login()
userTwo.login()

userOne.fullName()