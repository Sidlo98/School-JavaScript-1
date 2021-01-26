//SWITCHAR 

// Det här är en dålig lösning - det r bättre att använda en switch
//---------------------------------------------------
/* 
let color = 'blue';

if(color === 'red') {
  console.log('färgen är röd');
}
else if(color === 'blue'){
  console.log('färgen är blå');
}
else if(color === 'orange'){
  console.log('färgen är orange');
}
else if(color === 'white'){
  console.log('färgen är vit');
}
else if(color === 'black'){
  console.log('färgen är svart');
}
else {
  console.log('färgen du har angätt finns inte i databasen');
}


switch(value) {
  case compare-statement:
    true-action
    break;
  case compare-statement:
    true-action
    break;
  default:
    false-action
}
*/


let color = 'blue';

switch(color) {

  case 'red':
    console.log('color is red');
    break;                                       // använd break; för att hoppa ur kod blocket för att den inte ska köra alla kod som
  case 'blue':                                   // är under
    console.log('color is blue');
    break;
  case 'orange':
    console.log('color is orange');
    break;
  case 'white':
    console.log('color is white');
    break;
  case 'black':
    console.log('color is black');

  default:
    console.log(('color unknown!'));
}

let state = 1; 

let action = {
  type: 'hej'
}

let value = true;

switch(action.type) {
    case 'hej':

     if(value)
     console.log('value är också sant btw')

     state = 'hej';
     console.log(state);
    break;

    case 'foo':
      state = 'foo';
      console.log(state);
      break;

    case 'set':
      state = 'set';
      console.log(state);
      break;

    default:
      console.log('inget val gjort');

}

switch(1 == '1') {                                    //Det här blir onödigt, ska vi bara jämföra om något är sant eller falskt
  case true:                                          // så är det bättre med en if-sats
    console.log('det är sant');
    break;

  default:
    console.log('det är falskt');
    break;
                                                 // man bör alltid ha med en default i en switch
}



