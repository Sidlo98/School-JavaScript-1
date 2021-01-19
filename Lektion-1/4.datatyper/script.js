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
console.log(`Mitt förnamn är ${firstName} och efternamnet är ${lastName}`);

let fullName = firstName + ' ' + lastName.toUpperCase();
console.log(fullName);

let isActive = false;
console.log(isActive);


