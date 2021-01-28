// IF-SATSER


/* 
==     jämför bara värdet
===    hämför värdet och datatypen
!=     inte lika med 
!==    inte lika med och samma datatyp
<      mindre än
>=     mindre eller lika med
>      större än
>=     större än lika med

!       not - vänder vårat condition
&&      och
||      eller
*/

// if(1 !== '1' && 2 !== '2') {
//   console.log('om det är sant');
// }
// else {
//   console.log('om det är falskt');
// }

// let status = false;
// let value = 4;
// console.log('value är ' + value)


// if(status) 
//   console.log('status är true');
//   else
//   console.log('status är false');


// if(!status) 
//   console.log('status är false');
//   else
//   console.log('status är true');

//TERNARY OPERATOR 
  // status ? console.log('status är true') : console.log('status är false');

  // value > 3
  // ? console.log('value är större än 3')
  // : console.log('value är inte större än 3');

  // function validate() {
  //   return true
  // }

  // if(validate())
  // console.log('valideringen gick bra')

  // if(1 === '1') {
  //   console.log('det här komme rinte att skrivas ut');
  // } else if ( 1 == '1') {
  //   console.log('det här kommer att skrivas ut');
  // } else {
  //   console.log('om ingen annan blir true så skrivs det här true');
  // }


  // let color = 'blue';

  //bad practice
  // if (color == 'green') {
  //   console.log('color is gren')
  // } else if (color === 'pink'){
  // console.log('color is pink')
  // } else if (color === 'yellow'){
  // console.log('color is yellow')
  // } else if (color === 'blue'){
  // console.log('color is blue')
  // } else {
  //   console.log('color unkown')
  // }


//good practice 
// SWITCH - är samma som === (den jämför alltid datatypen)

// switch(value) {
//     case 1:
//       console.log('value är 1');
//       break;

//     case 2:
//       console.log('value är 2');
//       break;

//     case 3:
//       console.log('value är 3');
//       break;

//     case '4':
//       console.log('value är 4 och av datatypen String');
//       break;

//     case 4:
//       console.log('value är 4 och av datatypen Number');
//       break;
    
//     default:
//       console.log('okänt värde')
//       break;            //behövs inte då den ligger sist
// }

// SCOPE

/* 
  global scope - accsessbar överallt
  local scope - accessbar inom samma kodblock {}
*/


// let rootNivå = 'global scope';

//   if(true) {
//     let local = 'local scope';
//     var global = 'global scope med var'   // var ger oss alltid global scope även om vi deklarerar den i ett kodblock.
//                                           // Det här är INTE ett önskat beteende, det kommer krocka
//     console.log('kod block 1 har tillgång till ' + rootNivå);
//     console.log('kod block 1 har tillgång till ' + local);    
//     console.log('kod block 1 har tillgång till ' + global);    
//     if (true) {
//       // let local = 'vi kan skriva över genom att deklarera en ny'
//       // var global = 'den här ändrar på allt'
//       console.log('kodbloack 1.2 har också tillgång till ' + local);
//       console.log(local);
//     }
//   }

//   console.log('root nivån har tillgång till ' + rootNivå);
//   console.log('root nivån har INTE tillgång till variabeln local');
//   console.log('root nivån har tillgång till ' + global);


// Primitvia vs referens - datatyper


/* 
  REFERENS DATATYPER - Object
  pekar på samma variabel även när vi lägger in dem i någonting
*/

let user = {
  name: 'Joakim',
  age: '34',
  login() {
    console.log('loggar in')
  }
}

// user.login()

// let admin = user;

// admin.deleteUser = function() {
//   console.log('tar bort en användare')
// }

// admin.deleteUser()
// user.deleteUser()

let user2 = {
  name: 'Jeanette',
  age: '34',
  login() {
    console.log('loggar in')
  }
}

let array = [user, user2]
console.log(array)

console.log(array.findIndex(user => user.name === 'Jeanette'));
array[1].age = 33;

user2.age = 10;

/* 
  PRIMITIVA DATATYPER
  Domm blur en ny variablel när vi lägger in dem i någonting
*/

let name1 = 'Joakim';
let name2 = 'Jeanette';

let names = [name1, name2];

console.log(names);

name1 = 'Hans';

console.log(name1);
console.log(names);

names[names.indexOf('Joakim')] = 'Hans';

console.log(names)