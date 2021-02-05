$(document).ready(function(){

  const btn = document.querySelector('#btnAlert');
  const form = document.querySelector('#loginForm')

  // btn.addEventListener('click', function() {
  //   alert('Eventet gick');
  // })

  // $('#btnAlert').click(() => {
  //   alert('Eventet gick');
  // })


//  btn.addEventListener('dblclick', function() {
//     alert('Eventet gick');
//   })
  
//   btn.addEventListener('dblclick', function() {
//      alert('Eventet gick');
//    })
   
//    btn.addEventListener('mousedown', function() {
//       alert('Eventet gick');
//     })
    
//     btn.addEventListener('mouseup', function() {
//        alert('Eventet gick');
//      })
     
    //  btn.addEventListener('mouseenter', function() {
    //     alert('Eventet gick');
    //   })
      
      // btn.addEventListener('mouseleave', function() {
      //    alert('Eventet gick');
      //  })
 
    // form['firstName'].addEventListener('keyup', (e) => {
    //   console.log(e.key)
    // })
    
    // form['firstName'].addEventListener('keydown', (e) => {
    //   console.log(e.key)
    // })

    //-------------------------------------------------------------

    // form['firstName'].addEventListener('focus', function(e){
    //   console.log('skriv in ditt namn       FOCUS')
    //   this.classList.add('focus')
    // })

    // form['firstName'].addEventListener('blur', function(e){
    //   console.log('gick ifrån inputen            BLUR')
    //   this.classList.remove('focus')
    // })

    //---------------------------------------------------------------------------

    form['select'].addEventListener('change', function() {
      console.log(this.value)
    })

    form.addEventListener('submit', e => {
      e.preventDefault();

      console.log('validerar formuläret');
      console.log('validering klar skickar till databesen');
      form.reset();
    })

    const formBtn = document.querySelector('#formBtn');


    // formBtn.addEventListener('click', e => {
    //   e.preventDefault();

    //   console.log('validerar formuläret');
    //   console.log('validering klar skickar till databesen');
    //   form.reset();
    // })














})