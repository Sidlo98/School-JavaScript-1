// FUNKTIONER



// funcName();

function funcName() {           // gör man såhär kan vi köra functionen vart som helst
  console.log('function');      // det är för att den hoistas när filen laddas in
}


const funcName2 = function() {    // när vi gör funtionen med en const så hoistas den inte
  console.log('funktion 2');
}
// funcName2();

const funcName3 = () => {
  console.log('funktion 3');

}
// funcName3();


const fullName = (firstName, lastName = 'Larsson') => {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}

const person = fullName('Joakim', 'Wahlström');
const person2 = fullName('Hans')

// console.log(person);
// console.log(person2);


// // callback funktioner

// const func = (nr1, nr2, cb) => {
//   let sum = nr1 + nr2;
//   cb(sum);
// }

// func(5, 100, summa => {
//   console.log(`summan av nummrena är ${summa}`)
// })

// func(5, 4, summa => {
//   for(let i = 0; i < summa; i++) {
//     console.log(i);
//   }
// })


// const login = (cb) => {
//   console.log('starting');
//   setTimeout(() => {
//     console.log('logged In');
//     cb();
//   },2000)

// }

// login(() => {
//   console.log('switching location');
// })
// console.log('switch location!')





/* 
    OBJECT
    key: value  pair   (firstName: 'Joakim')


*/

// Javascript Object
const jsObj = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 34,
  phoneNumbers: [070147565, 076346513],
  address: {
    addressline: 'gatan 2',
    zipcode: 72345,
    city: 'Västerås'
  }
}

// JSON - Javascript Object Notation

let jsonObject = {"firstName":"Joakim","lastName":"Wahlström","age":34,"phoneNumbers":[14733173,16371019],"address":{"addressline":"gatan 2","zipcode":72345,"city":"Västerås"}}
let jsonObj = {
  "firstName":"Joakim",
  "lastName":"Wahlström",
  "age":34,
  "phoneNumbers":[14733173,16371019],
  "address":{
    "addressline":"gatan 2",
    "zipcode":72345,
    "city":"Västerås"
  }
}

// konvertera js till json = JSON.stringify(jsObject)
const toJson = JSON.stringify(jsObj);
// console.log(toJson)
// console.log(JSON.stringify(jsObj));

// konvertera från json till js = JSON.parse(jsonObject)
const fromJson = JSON.parse(toJson);
// console.log(fromJson);




// let people = [
//   {
//     firstName: 'Joakim',
//     lastName: 'Wahlström',
//     age: 34,
//     phoneNumbers: [070147565, 076346513],
//     address: {
//       addressline: 'gatan 2',
//       zipcode: 72345,
//       city: 'Västerås'
//     }
//   },
//   {
//     firstName: 'Hans',
//     lastName: 'Mattin-Lassei',
//     age: 36,
//     phoneNumbers: [070147565, 076346513],
//     address: {
//       addressline: 'gatan 2',
//       zipcode: 72345,
//       city: 'Västerås'
//     }
//   },
//   {
//     firstName: 'Tommy',
//     lastName: 'Mattin-Lassei',
//     age: 38,
//     phoneNumbers: [070147565, 076346513],
//     address: {
//       addressline: 'gatan 2',
//       zipcode: 72345,
//       city: 'Västerås'
//     }
//   }
// ]




// CONSTRUCTOR

// function Address(addressline, zipcode, city) {
//   return `${addressline}, ${zipcode} ${city.toLocaleUpperCase()}`
// }
// function Address(addressline, zipcode, city) {
//   this.addressline = addressline;
//   this.zipcode = zipcode;
//   this.city = city;
// }

// function Person(firstName, lastName, age, phoneNumbers, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age, 
//   this.phoneNumbers = phoneNumbers;
//   this.address = address;

//   this.fullAddress = function() {
//     return `${this.address.addressline}, ${this.address.zipcode} ${this.address.city.toLocaleUpperCase()}`
//   }

//   // this.fullAddress = Address(this.address.addressline, this.address.zipcode, this.address.city)
// }

// const p1 = new Person('Joakim', 'Wahlström', 34, [176254953, 0704567432], { addressline: 'gatan 2', zipcode: 72345, city: 'Västerås' })

// // console.log(p1)
// // console.log(p1.fullAddress)

// const people = [
//   new Person('Joakim', 'Wahlström', 34, [1321, 635121], new Address('Gatan i stan 12', 72345, 'Västerås')),
//   new Person('Hans', 'Mattin-Lassei', 36, [1323421, 6321121], new Address('Gatan', 12349, 'Farsta'))
// ]

// // console.log(people[0].fullAddress())
// console.log(people)

// let json = JSON.stringify(people)
// console.log(json)


// PROTOTYPE  (__proto__)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.correctNames()
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.correctNames = function() {
  this.firstName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1)
  // this.lastName = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)

  const lastNames = this.lastName.split(' ')
  this.lastName = ''
  lastNames.forEach(name => {

    if(name.includes('-')) {
      let parts = name.split('-')
      let newName = '';

      parts.forEach(part => {
        part = part.charAt(0).toUpperCase() + part.slice(1);
        if(newName === '')
          newName = part
        else 
          newName += '-' + part
      })
      name = newName
      this.lastName += name + ' '
    }
    else {
      name = name.charAt(0).toUpperCase() + name.slice(1)
      this.lastName += name + ' '
    }

  })

}


const p1 = new Person('joakim', 'wahlström')
const p2 = new Person('hans', 'mattin-lassei')
const p3 = new Person('nisse', 'karlsson pyssling')

console.log(p1)
console.log(p1.fullName())
console.log(p2.fullName())
// p3.correctNames()
console.log(p3.fullName())