/* 
  Javascript Datatyper
  ---------------------------------------------
  String    =  Text
  Number    =  Tal, decimaltal
  Boolean   =  False/True
  null      =  null är tomt, inget alls (manuellt)
  undefiend =  har ej blivit definierat än (automatiskt)
  Object    =  ett object/klass innehåller ett eller flera värden
  array     =  en lista med värden, Arrayer är object
*/

/* 
  Deklarera variabler
  ---------------------------------------------

  name = 'Pontus'; (ANVÄND IN!)
  var name = 'Pontus';
  let name = 'Pontus';
  const name = 'Pontus';

  var = global variabel - accessbar överallt i koden (gör inte såhär)
  let = lokal variabel - accessbar inom det angivna området (gör så här)
  const = lokal konstant variabel - kan inte skrivas över (undantag finns)

  C# exempel:
    string name = "Pontus";
    int age = 34;
  JS exempel:
    let name = 'Pontus';
    let age = 'Pontus';

  Variabel = nått som vi lagra information i
    camelCase  =  Javascript, Java, C, C++
    Pascal     =  C#, Pascal
    _private   = en variabel som "bara" lever inom en vss del.

    exempel på camelCase: firstName, lastName, email, city

    -firstName = 'Pontus';
    firstName = _firstName;
*/

/* 
  Strings
  ---------------------------------------------------------------------
  let name = "Pontus";    - använd inte
  let name = 'Pontus';    - denna ska du använda
  let name = `Pontus`;    - Template String använd denna när du ska använda placeholders (shift + ´ )

  avsluta varje rad med ett ; (det behövs inte, men det är bra att göra.)
*/

let doNotUse = "Pontus";
let useThis = 'Pontus';
let number = 22;


// console.log(useThis, number);

let withoutPlaceholders = 'Mitt namn är ' + useThis + ' och jag är ' + number + ' år gamal.';

// Template string
let withPlaceholders = `Mitt namn är ${useThis} och jag är ${number} år gamal.`;

// console.log(withPlaceholders);

var varName = 'var Pontus';
let letName = 'let Pontus';
const constName = 'const Pontus';

// console.log(varName)
// console.log(letName)
// console.log(constName)

varName = 'var Jeanette';
letName = 'let Jeanette';
// constName = 'const Jeanette';

// console.log(varName)
// console.log(letName)


let myName = 'Pontus Sidlo';

// console.log(myName.length);
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName.indexOf('t'));

// console.log(myName.toLocaleUpperCase());
// console.log(myName.toLocaleLowerCase());
// console.log(myName.trim());
// console.log(myName.toLocaleLowerCase().trim());

// console.log(myName.split(' '));

let names = myName.split(' ');
let firstName = names[0];
let lastName = names[1];
// console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}`);

let fullName = firstName + ' ' + lastName.toUpperCase();
// console.log(fullName);

let isActive = false;
// console.log(isActive);


firstName = firstName.concat(' är bäst');
firstName = firstName.replace('bäst', 'KUNG');
// console.log(firstName)



/* 
    NUMBERS
    ----------------------------------

    math operators:

    +  lägg till
    -  ta bort
'   *  gångra
    ** upphöjt i
    /  dela
    %  division remainder
    ++ öka med 1
    -- minska med 1

    =  lika med 
    += ha kvar det gamla och lägga till
    -= ha kvar det gamla och ta bort från 
'   *= ha kvar det gamla och gångra och lägg till 
    /= ha kvar det gamla och dela och lägg till
    %= ha kvar det gamla och division remainder
*/

let nr1 = 10;
let nr2 = 2.5;

// console.log(nr1,nr2);
// console.log(nr1 + nr2);
// console.log(nr1 - nr2);

nr1 = nr1 + 1;
nr1 += 1;
nr1 ++;

nr1 = nr1 - 1;
nr1 -= 1; //kortaste sättet om man vill välja antal att justera med.
nr1 --; //kortaste sättet men bara med 1.


// console.log(nr1);

//gånger
// console.log(nr1 * nr2);
//upphöjt i
// console.log(nr1 ** nr2);
//vad vlir kvar, division remainder
// console.log(nr1 % 2); //får du noll i konsolen är nr1 ett jämt tal får det 1 så är det ett ojämt tal.

let num = 1000000;

// console.log(num.toFixed(2)); 
// console.log(Math.round(num));   //avrundar
// console.log(Math.floor(num));  //avrundar neråt
// console.log(Math.ceil(num));  //avrundar uppåt
// console.log(Math.floor(Math.random()*100));

let region = 'sv-SE';

// console.log(num.toLocaleString(region));

let datatype;

// let datatype1, datatype2, datatype3;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = null; // DET HÄR ÄR EN BUGG I JAVASCRIPT
console.log(typeof datatype);
datatype = true;
console.log(typeof datatype);
datatype = {};  // DET HÄR ÄR ETT RIKTIGT OBJECT INTE SOM MED NULL
console.log(typeof datatype);
datatype = []; // DETTA ÄR EN ARRAY MEN RÄKNAS IN I DATATYPEN OBJECT
console.log(typeof datatype);

