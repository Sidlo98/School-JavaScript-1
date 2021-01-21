//CONSOLE

// console.log('Vanligt meddelande i konsolen');
// console.warn('Varningsmeddelande');
// console.error('Felmeddelande');


// VARIABLER

// name = 'Pontus';    //Deklarerar någonting globalt. GÖR INTE SÅ HÄR
// var name = 'Pontus';    //Deklarerar någonting globalt. Undvik att göra så här
// let  name = 'Pontus';    //Deklarerar någonting lokalt i ett scope. GÖR SÅHÄR 
// const name = 'Pontus';   //Deklarera någonting lokalt som är skrivsksyddat . GÖR SÅ HÄR

// let rosaBoll = 100;
// rosaBoll = 50;                 //För att ändra ett värde använder vi bara variabelnamnet utan let/const.
// console.log(rosaBoll);

// let name = 'Pontus';
// name = 'jeanette';
// console.log(name);

// let name1 = 'Hans';           //Man kan bara he en variabel av ssamma namn i samma scope.

// let number = Number('hej');
// console.log(number);           //NaN (Not a Number)


// let firstName = 'Pontus';  //Vi använder camelCase i våra variabelnamn. börja med litenbokstav 
                          //och har man flera ord så börjarman nästa ord med en storbokstav.
let _private = 'Joakim';  //undantag om vi vill ha en privat variabel som bara lever i ett visst scope.


// DATA TYPES 
//string, number, boolean, null, undefiend, object, array(object)

   //string - till för texter
  //  let name = 'Pontus';
   let name = "Pontus";
  //  let namne = `Pontus`;   //används när vi vill göra en template sting och använda placeholders.

  // let text = "Använder \"citat\" och 'enkel' fnuttar och variablen " + name + ".";
    // let text = 'Använder "citat" och \'enkel\' fnuttar och variabeln ' + name + '.';
    let text = `Anväder "citat" och 'enkel' fnuttar och variablen ${name}.`;
    let email = 'pontus.sidlo@ec-utbildning.se';
    let number = 52;
    let nrString = '35';


    // console.log(text.length);
    // console.log(text.indexOf('och'));
    // console.log(text.lastIndexOf('och'));
    // console.log(text.replace('och', '&'));
    // console.log(text.replaceAll('och', '&'));
    // console.log(text.toLocaleUpperCase());
    // console.log(text.toUpperCase());
    // console.log(text.toLowerCase());
    // console.log(text.concat(name));
    // console.log(text.trim());
    // console.log(email.split('@'));
    // console.log(number.toString());
    

    // NUMBER - till för all typer av nummer, heltal, decimaltal, och stora tal.

    // console.log(Number(nrString));

    // number = 1;        //GÖR INTE SÅHÄR
    // var number = 1;    // UNDIVK ATT GÖR SÅHÄR
    // let number = 1;       //GÖR SÅHÄR
    // const number = 1;     //GÖR SÅHÄR

    // let value = null;

    // value = 1;
    // // value = 'Hej';   //Namnet på en variabel påverkar inte vad för datatyp som kan lagrars i den.


    // if(value) {
    //   console.log('hej hej');
    // }
    
    // console.log(value)


    let value1 = 11;
    let value2 = 5;
    let result;

    //Math operators
    
    // result = 1 + 3;
    // result = value1 + value2;
    // result = value1 - value2;
    // result = value1 * value2;
    // result = value1 / value2;
    // result = value1 % value2;

    // result += value1;
    // result = result + value1;
    // result -= value1;
    // result *= value1;
    // result /= value1;
    // result %= value1;

    // console.log(result);

    // console.log(Number(true));
    // console.log(Number(false));
    // console.log(Number('123'));
    // console.log(Number('    123'));
    // console.log(Number('123      '));
    // console.log(Number('10.123455'));
    // console.log(Number('1   23     ')); //NaN
    // console.log(Number('10,123455'));   //NaN
    // console.log(Number('Pontus'));      //NaN


    //BOOLEAN
    // sant eller falskt (true or false) (1 or 0)
    // let status = true;
    // console.log(status);
    // status = false;
    // console.log(status);

    // if(true) {
    //   console.log('sant')
    // }

    //UNDEFINED - när den inte vet var den är för typ
    // returneras av en funktion som inte har en specifik return med ett värde

      // let value;
      // console.log(typeof value);

      //NULL - saknar värde men är definerad 
      // let value = null;
      // console.log(typeof value); //BUGG - detta är ej ett objekt


      //OBJECT -håller olika typer av data/attribut på en sak

      const car = {
        märke: 'Volvo',
        modelName: 'V70',
        ramNummer: 1234567,
        växellåda: {
          växla:0,
          växlaUpp(){
            this.växellåda.växel + 1;
          }
        }
      }

      const user = {
        id: 1,
        firstName: 'Pontus',
        lastName: 'Sidlo',
        email: 'pontus.sidlo@outlook.com',
        status: true,
      }

      const jsonUser = {
       "2": 1,
        "firstName": "Pontus",
        "lastName": "Sidlo",
        "email": "pontus.sidlo@outlook.com",
        "status": true
      }

      const json = JSON.stringify(user);
      // console.log(JSON.parse(json));

      // console.log(user.firstName);

      let hej = user.firstName;
      // console.log(hej);

      //DESTRUCTURE

      // const { firstName, lastName, status} = user;
      // console.log(firstName, lastName, status);

      // const{ status: isLoggedIn } = user;
      // console.log(isLoggedIn);

      // console.log(`Användaren heter ${user.firstName}, eller kanske ${hej}`);
      
      user.firstName = 'Hans';
      user.address = {
        street: 'gatan',
        nr: 23,
        zip: 57432,
        city: 'västerås'
      }

      console.log(user);

      console.log(`Användaren heter ${user.firstName}, eller kanske ${hej}`);