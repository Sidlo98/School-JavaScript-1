/* 
  FUNCTIONS

  Funktioner är ett stycker kod som man kan återanvända för att slippa
  skriva samma kod flera gånger.

  kalla på en function - funktionensNamn()
  man skriver funktionens namn följt av paranteser

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

hej();

function hej() {
  console.log('Hej');                         // den här hoistas
}

const greet = function() {
  // console.log('Hur är läget?');               // den här hoistas inte
  return 'Hur är läget?'                //ALLA funktioner ger oss en return
}                                       // Om vi inte hanterar den så är den undefiend


hej();
console.log(greet())
greet();

