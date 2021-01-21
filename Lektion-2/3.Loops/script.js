const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

const usersArray = [
  {id: '1', name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true},
  {id: '2', name: 'Jeanette', email: 'jeanette@mail.com', age: 33, status: false},
  {id: '3', name: 'Jack', email: 'jack@mail.com', age: 5, status: false},
  {id: '4', name: 'Colin', email: 'colin@mail.com', age: 3, status: false},
  {id: '5', name: 'Vince', email: 'vince@mail.com', age: 1, status: false},
  {id: '6', name: 'Liam', email: 'liam@mail.com', age: 15, status: true},
  {id: '7', name: 'Wille', email: 'wille@mail.com', age: 9, status: false},
];

let numberOfUsers = 0




// hämta ut ett specifikt värde
// console.log(usersArray[1].name);

/// FOR LOOPAR 
//------------------------------------------------------------

// Loppa ett givet antal gånger
// for (let i = 0; i <5; i++){
//  // console.log(i);
//  console.log(i, namesArray[i]);

// }

// Loopa igenom en hel array med en FOR
// console.log(namesArray.length);
// for (let i = 0; i < namesArray.length; i++){
//   console.log(i, namesArray[i]);
// }

//FOR OF - loopar igemon allt i en given array
//---------------------------------------------------------------------

// man kan själv välja vad man vill att varje sak i arryen ska kallas
// for(let name of namesArray) {
//   console.log(name);
// };

// console.log(usersArray);

// for (let user of usersArray) {
//   console.log(user);
//   console.log(user.name);
// }


// WHILE LOOP
//-----------------------------------------------

// let i = 1;

// while (i < 5 ) {
//   console.log('while: ' + i);
//   i++; // kom ihåg att inkrementer i annars blir det en oändlig loop
// }

// console.log('i är ' + i)

// DO WHILE - kommer att göra actions minst en gång
//----------------------------------------------------------------
// do {
//   console.log('do while: ' + i);
//   i++;
// } while(i < 7);

// console.log('i är ' + i);

/* 
 WHILE/DO-WHILE LOOPAR - vill vi använda till ett visst tillstånd är uppfyllt.
  "Är jag uppkopplad? nej, okej, då försöker jag koppla upp mig"
  "så länge det är för varmt. -kör fläkten."

  FOR LOOPAR - loopar igemon ett givet antal gånger.. -vi vill skriva ut någonting 5 gånger eller tex.
  visa dom 10 sista meddelandena.

  FOR-OF LOOPAR - använder vi när vi vill loopa igeom ALLA objekten oavset hur många det är
*/

// HIGH ORDER ARRAY METHODS
//----------------------------------------------------------------------------------
// FOR EACH - loopa igenom en hel array

// namesArray.forEach(function(name, index){
//   console.log('name: ' + name)
//   console.log('index: ' + index)
// });

// namesArray.forEach((name, i) => {
//     console.log(name);
//     console.log(i);
// });

// usersArray.forEach(user => {
//   console.log(user.name, user.age);
//   numberOfUsers ++;
//   namesArray.push(user.name);
// });

// console.log(namesArray);
// console.log('Användare: ' + numberOfUsers + 'st');

// MAP - retunerar en ny array berende på vad man väljer
//----------------------------------------------------------------------------------
// const userEmails = usersArray.map(user => {
//   return user.email; // här väjär jag vad som ska retuneras
// });
// console.log(userEmails);

// FILTER
//------------------------------------------------------------

const loggedIn = usersArray.filter(user => {
  return user.status === true;           
  // return user.age > 14;
});

console.log(loggedIn);

