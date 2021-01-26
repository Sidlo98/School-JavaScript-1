let scoreOne = 50;
let scoreTwo = scoreOne;


// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
scoreOne = 100
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


const userOne = {name: 'Joakim', age: 34};
const userTwo = userOne;

// console.log(userOne, userTwo);

userOne.name = 'Jeanette';
userOne.age = 50;
 
// console.log(userOne, userTwo);


let array = [{name: 'Joakim', age:34}, userOne, {name: 'Hans', age: 36}];

let user = array.find(user => user.name === 'Joakim');
user.name = 'Haitem';

// array[0].name = 'nisse'

console.log(array);

let names = ['joakim', 'Hans', 'Jeanette'];

let person = names.find(name => name === 'Hans');
console.log(person);
person = 'Haitem';

// names[names.indexOf('Hans')] = 'Haitem';
console.log(names)