// ARRAYS [] - en lista med ett eller flera värden

// name = [];          //GÖR INTE SÅHÄR
// var  name = [];     //UNDIV ATT GÖRA SÅHÄR
// let name = [];      //GÖR SÅ HÄR
// const name = [];   //GÖR SÅ HÄR


// det här är INTE best practice
const mutliArray = ['12', 12, true, {firstName: 'Joakim'}, [1,2,3,4], null];

//det här är bättre
const array = [0, 1, 2, 3, 4]; // man vill ha samma DATATYPER I en array!

const user = [
  {firstName: 'Pontus', lastName: 'Sidlo', age: 22},
  {firstName: 'Pontus', lastName: 'Sidlo', age: 22},
  {firstName: 'Pontus', lastName: 'Sidlo', age: 22},
]

// const names = ['Pontus', 'Jeanette', 'Jack'];
let names = ['Pontus', 'Jeanette', 'Jack'];

// hämta information från e array
// console.log(names); // hela arrayen
// console.log(names[0]); // hämta från en specifik index position i arrayen med hjälp av []
// console.log(names[1]);
// console.log(names[2]);

// .unshift() - lägg till i början av en array 
names.unshift('Colin');
// console.log('med unshift: ' + names);

//.shift() - Ta bort i början av en array
names.shift();
// console.log('med shift: ' + names);

// .push() - lägg till i slutet av en array
names.push('Colin');
// console.log('med push:' + names);

// .pop() - Ta bort i slutet av en array
names.pop();
// console.log('med pop:' + names); 

//Ändra ett specifikt värde i en array
names[1] = 'Nytt Namn';
// console.log('Ändrat: ' + names);

// Hämta ut vilken index plats någonting har i en array
// console.log(names.indexOf('Nytt Namn'));

// delete - tar bort värdet på en specifik plats i en array, men inte platsen
delete names[1];
delete names[names.indexOf('Nytt Namn')];  
// console.log(names);

// .splice() - tar bort och/eller lägger till ett värde från en specifik position
names.splice(1, 1); // tar bort 1 från index plats 1 
// console.log(names);
names.splice(1, 0, 'Colin', 'Jeanette'); // tar bort 0 och lägger till Colin och Jeanette
// console.log(names);
names.splice(1, 2, 'Hans'); // tar bort 2 från indexplats 1 och lägger till Hans
// console.log(names);

// Hur lång är en array
// console.log(names.length);
// Hur långt är någonting inne i en array
// console.log(names[0].length);  // fungerar bara om det vi försöker kolla på har en längd att få ut

// lägga ihop 2 arrayer
// console.log(names.concat(['Colin', 'Jeanette']));
names = names.concat(['Colin', 'Jeanette']);
console.log(names);

// sortera en array i bokstavsårdning
names.sort();
console.log(names);

// vänd på arrayen så först blir sist osv
names.reverse();
console.log(names);

// sortera i bokstavsordning baklänges 
names.sort().reverse();
console.log(names);