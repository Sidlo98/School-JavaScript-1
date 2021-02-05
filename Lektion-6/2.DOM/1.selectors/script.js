/* 
  DOM - Document Object Model
*/

// console.log(window)


// Det första jag vill göra är att skapa referenser till mina html elemnt
//som jag vill göra någonting. detta gör vi med olika selectors.

//Gamalt sätt

let p1 = document.getElementsByTagName('p');
console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
console.log(p2);

let p3 = document.getElementById('para');
console.log(p3);


// med query selector