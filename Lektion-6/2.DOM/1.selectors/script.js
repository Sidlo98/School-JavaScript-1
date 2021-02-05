/* 
  DOM - Document Object Model

  HTMLCollection:

  NodeList:




*/

// console.log(window)


// Det första jag vill göra är att skapa referenser till mina html elemnt
//som jag vill göra någonting. detta gör vi med olika selectors.

//äldre sätt att göra det funkar och det funkar. 

let p1 = document.getElementsByTagName('p');
// console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
// console.log(p2);

let p3 = document.getElementById('para');
// console.log(p3);


// med query selector nyare och lite smidigare enligt vissa.

let q1 = document.querySelector('p');
// console.log(q1);

let q2 = document.querySelector('.paragraph');
// console.log(q2);

let q3 = document.querySelector('#para');
// console.log(q3);

let q4 = document.querySelector('div.paragraph');
// console.log(q4);

let q5 = document.querySelectorAll('p');
// console.log(q5)


// logga med en HTML Collection
//----------------------------------------------------

// p1.forEach(node => {        // med getElement ger det oss en HTML Collection som vi inte kan använda arry metoder på.
//   console.log(node)          // för att få detta att funka så vehöver vi även detta nedanför
// });

// for(let i =0; i < p1.length; i++) {         // för att få detta att funka så behöver vi även detta nedanför
//   console.log(p1[i]);

//Logga med en Node List
//---------------------------------------------------------------


// q5.forEach(node => {             // medans query selector får man en node list beter sig som en vanlig array då funkar
//   console.log(node)
// });


//-----------------------------------------------------------------------------------------


let list = document.querySelector('#list');

// console.log(list.parentNode);              //med parentNode får man förälden till den noden. så beroende hur den ligger får man en node
// console.log(list.childNodes);              // vissar en nodelist med alla children nodes i list inklusive alla nodes som tex text(whitespace)
// console.log(list.children);
// console.log(list.children[0]);
// console.log(list.nextSibling);
// console.log(list.nextElementSibling);
// console.log(list.previousSibling);
// console.log(list.previousElementSibling);