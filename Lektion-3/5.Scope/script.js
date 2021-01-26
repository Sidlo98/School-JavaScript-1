// SCOPE

/* 
  global scope - accessbar överallt i koden

  local scope - accessbar inom det givna området, innanför ett kodblokc{}

*/


let age = 34;          // global scope declarerad på root nivå 
//let age = 50;


if(true){
  let name = 'Joakim';                                  // local scope declarerad i ett kodblock,
  let age = 50;  //skapar en nu lokal age variabel       tillgänglig ändast i detta kod blocket eller kodblockets children.
  // age = 2000;     ändrar på den globala age variabeln       
  console.log('inne i första kodblocket', age);
  console.log('inne i första kodblocket', name);

  if(true) {
    let age = 100;
    let name = 'Hans';
    var globalt = 'var'                                   // var blir alltid en globalt declarerad variabel 
    console.log('inne i kodbloack 1.2', age, name);
    console.log('inne i kodbloack 1.2', globalt);
  }
}

if(true) {
  console.log('inne i kodblock 2', age)
}


console.log('utanför något block', age)
console.log('utanför något block', name)
console.log('utanför något block', globalt)                                // var blir alltid en globalt declarerad variabel 
