//ARRAYS

// array = []; //GÖR INTE SÅHÄR
// var array = []; //Global variabel - UNDVIk
// let array = []; // Lokal variabel - gär såhär
// const array = []; // Lokal variabel som är konstant - GÖR SÅHÄR

// const array = [];

// const array = ['Joakim', 34, null, {}]; // MULTI ARRAY - UNDIVK

// const array = ['Joakin', 'Jeanette', 'Hans'];
// const array = [1, 2, 3, 4, 5];

//LÄGG TILL I EN ARRAY

const array = [
  { id: 1, firstName: 'Joakim', lastName: 'Whalström', age: 34},
  { id: 2, firstName: 'Hans', lastName: 'Mattin-Lassei', age: 36}
];
// console.log(array);

//Lägga till i början
array.unshift({ id: 3, firstName: 'Haitem', lastName: 'Simrani', age: 35});
// console.log(array);

// lägga till i slutet

array.push({ id: 4, firstName: 'Tommy', lastName: 'Mattin-Lassei', age: 38});
// console.log(array);


//lägga till vart so helst
array.splice(2, 0, { id: 5, firstName: 'Jeanette', lastName: 'Wankowicz', age: 33});
// console.log(array);


//TA BORT FRÅN EN ARRAY

//ta bort från slutet i en array
// array.pop();
// console.log(array);

//ta bort i början av en array
// array.shift();
// console.log(array);

//ta bort värdet från en indexplats
// delete array[1];
// console.log(array);

//tar bort vart som helst
// array.splice(2, 1);
// console.log(array);


const names = array.map(user => {
  return user.firstName;
});

// console.log(names);


// sortera i bokstavs/siffer-ordning
// names.sort();
// console.log(names);

// Ändra ordningen så att första hanmnar sist osv.
// names.reverse();
// console.log(names);

//chainar ihop metoder 

names.sort().reverse();
console.log(names);

// hämta en indexplats av ett värde
let index = names.indexOf('Hans');
// console.log(index);

// När vi vill ha en indexplats om arrayen innehåller object
let userIndex = array.findIndex(user => user.firstName === 'Tommy');
// console.log(userIndex);

// retunerara hela det valda objectet från en array
let user = array.find(user => user.id === 2);
// console.log(user);


//delete names[index];
// names.splice(index, 1);
// names.splice(names.indexOf('Hans'), 1);
// console.log(names)

//array.map(); - retunerar en array med utvalda värden från en befintlig array


//filtrerar en array baserat på ett värde 
const idArray = array.filter(user => {
  // return user.id > 2;
  return user.id !== 5;
});
// console.log(idArray);

//  FOREACH LOOP
array.forEach(user => {
  const {firstName, lastName } = user;
  // console.log(`Name: ${firstName} ${lastName}`);
  document.body.innerHTML += `
  <p>Name: ${firstName} ${lastName}</p>
  `
});


//LOOPAR

//for

for(let i = 0; i <names.length; i++) {
  let p = document.createElement('p');
  p.innerText = names[i];

  document.body.appendChild(p);
  // console.log(names[i]);
};

// for of
for(user of array ) {
  // console.log(user.lastName);
};


//While

let i = 0;

while(i < names.length) {
  console.log(names[i]);
  i++ // VIKTIGT ANNARS BLIR DET EN OÄNDLIG LOOP!
};

// console.log(i)


// Do while - kommer alltid att köras minst en gång
do {
  console.log(i);
  i++; // VIKTIGT ANNARS BLIR DET EN OÄNDLIG LOOP!
}
while(i < 10);

console.log(i);