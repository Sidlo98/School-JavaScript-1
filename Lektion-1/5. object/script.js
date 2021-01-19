//OBJECT

/* 
  object innehåller ett eller flera värden

  används för klasser, objekt och json (JavaScript Object Notation)
  skrivs med ket:Value pairs
  alla värden separeras av ett ,
*/

// person = {};
// var person = {};
// let person = {};
// const person = {};

// console.log(typeof person);


//JS Object
// const person = {
//   firstName: 'Pontus',
//   lastName: 'Sidlo'
// };


//JSON Object
// const person = {
//   "firstName": "Pontus",
//   "lastName": "Pontus"
// }

// console.log(person);


//konvertera till JSON
// let json = JSON.stringify(person);
// console.log(json);
// console.log(typeof json);

//konvertera från JSON till JS
// const jsObject = JSON.parse(json);
// console.log(jsObject)
// console.log(typeof jsObject)

const user = {
  firstName: 'Pontus',
  lastName: 'Sidlo',
  age:22,
  address:{
    street: 'street',
    nr: 5,
    zipCode: '47945',
    city: 'Göteborg'
  },
  phoneNumbers: [
    '0735872940',
    '0735987230'
  ],
  isActive: false,

  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  login: function(){
    this.isActive = true
  }
};

let key = 'lastName';

// console.log(user);
// console.log(user.firstName)
// console.log(user.address.city)

// console.log(user['firstName']);
// console.log(user[key]);

// console.log(user.fullName())

// let firstName = user.firstName;
// console.log(firstName)

// console.log(`användaren heter ${user.firstName} och bor i ${user.address.city}.`);

user.firstName = 'Gleen';

// console.log(`användaren heter ${user.firstName} och bor i ${user.address.city}.`);

// user = 3; det här går inte när det är en const

//lägga till eller ändra
user.email = 'pontus.sidlo@outlook.se';

// console.log(user.email)

// Destructure
//-------------------------------------------------------------

const { firstName, lastName, address: { city } } = user;
console.log(firstName, lastName);
console.log(city);

const { firstName: fName, lastName: lName } = user;
console.log(fName);
console.log(lName);

user.fullName();
console.log(user.isActive);
user.login();
console.log(user.isActive);

console.log(user.phoneNumbers[1])
user.age ++
console.log(user.age)