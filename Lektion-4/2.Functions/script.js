/* 
  FUNCTIONS

  Funktioner är ett stycker kod som man kan återanvända för att slippa
  skriva samma kod flera gånger.

  kalla på en function - funktionensNamn()
  man skriver funktionens namn följt av parametrar

  deklarera en funktion:
  --------------------------------------

  nametPåFunc();

  function namnetPåFunc() {
    här skriver vi den kod vi vill ska köras när vi kallar på funktionen
    console.log('hej på dig du');
  }

  const greet = function() {
    console.log('Hej Hej')
  }

  greet();

  skillnaden på dessa har med hoisting att göra.
  en vanlig funktion hissar upp till toppem och vi kan köra den innan den blir deklarerad i koden
  det här går INTE med const varianten

  köra function
  namnetPåFunc();
  greet();

*/

// hej();

// function hej() {
//   console.log('Hej');                         // den här hoistas
// }

// const greet = function() {
//   // console.log('Hur är läget?');               // den här hoistas inte
//   return 'Hur är läget?'                //ALLA funktioner ger oss en return
// }                                       // Om vi inte hanterar den så är den undefiend

// hej();
// console.log(greet())
// greet();

//funktioner med parametrar

let firstName = 'Joakim';

// const greet = function(name) {
  //Vi vill så mycket det går använda variabler från våra params i funktionen inte utifrån

  // console.log(`hej ${firstName} hur är läget?`);
//   console.log(`hej ${name} hur är läget?`);
// }

// greet(firstName);
// greet('Hans');

const fullName = function(FirstName, lastName) {
  let fullName = `${firstName} ${lastName}`
  return fullName
}

// let myName = fullName('Joakim', 'Wahlström');
// console.log(myName);
// console.log(fullName('Hans', 'Mattin-Lassei'));


const func2 = function(firstName = 'John', lastName = 'Doe') {
  let _fullName = firstName + ' ' + lastName
  // console.log(_fullName.trim())
}

// func2();
// func2('Joakim');
// func2('Joakim', 'Wahlström');


const calc = function(num1 = 0, num2 = 0) {
  return num1 * num2
}

let sum = calc(5514, 21223)
// console.log(sum)


//ARROW FUNCTIONS

//Arrow functions kom till för att lösa problem med ordet this

// const greet = (name) => {
//   return `Hej ${name}`
// }

// om jag har bara 1 parameter behövs inte paranteserna
// const greet = name => {
//   return `Hej ${name}`
// }
//om jag bara gör en sak i min funktion så kan jag skriva den på 1 rad, då sker return automatiskt
const greet = name => `Hej ${name}`


// console.log(greet('Joakim'));

// CALLBACK FUNCTIONS

const func = (callback) => {
  // Jag räknar ut ett värde / skapar något / eller vad som helst.
  let value = 'test';
  callback(value);
}

// func(vadSom => {   // Här har jag automatiskt tillgång till parametern som skickar från den första functionen.
  //Här kan jag välja vad jag vill göra med den parametern
//   console.log(vadSom);
//   console.log(vadSom);
//   console.log(vadSom);
// })

// Exempel på en callback funktion
let names = ['Joakim', 'Jeanette', 'Hans', 'Jack'];

// names.forEach(name => {
//   console.log(name)
// })


/* 
  METODER/METHODS
  --------------------------------------------------
  metoder är funktioner som är inbyggda på ett objekt

  metoder deklarerar vi inne i ett objekt men aldrig som en arrow function för då blir det problem med this.

*/

// Exempel på motoder

// array metod
// names.forEach(name => {
//   console.log(name)
// })

// string metod
// let myName = names[0]
// console.log(myName)

// let upper = myName.toUpperCase();
// console.log(upper);

let user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    console.log(this);
    return this.firstName + ' ' + this.lastName;
  }
  // fullName: () => {
  //   console.log(this);
  //   return this.firstName + ' ' + this.lastName;
  // }
}
// console.log(this)
console.log(user.fullName());
// user.fullName();