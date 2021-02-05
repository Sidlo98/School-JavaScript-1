/* 
  Javascript:
    let query = document.querySelector('#btn')

    let selectButtonId = document.getElementById('btn')
    let selectButtonTag = document.getElementByTagName('button')
    let selectButtonClass= document.getElementByClassName('buttonClass')

  JQuery

    let selectButtonId = $('#btn');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.buttonClass');

*/

$(document).ready(function() {
  // Här kan vi skriva JQuery

  //Skriva ut text
  //-------------------------------------------------------

  // document.getElementById('div1').innerText = 'Detta är en text som är skriven med Javascript';
  $('#div1').text('Detta är en text som är skrivern med Jquery');

  //Skriva ut HTML
  //---------------------------------------------

  // document.getElementById('div2').innerHTML = '<p>Paragraph med Javascript</p>';
  $('#div2').html('<p>Paragraph med Jquery</p>');


  // Ändra Styling
  //------------------------------

  // document.getElementById('div1').style.color = '#ff0000';
  $('#div1').css('color', '#0000ff');
  
  // document.getElementById('div2').style.fontSize = '2rem';
  $('#div2').css('font-size', '2rem');
  

  // document.getElementById('div2').style.display = 'none';
  $('#div2').hide()

  // document.getElementById('div2').style.display = '';
  $('#div2').show()



  // ---------------------------------------------------------------
  // document.getElementById('btn').addEventListener('click', () => {
  //   let div2 = document.getElementById('div2');
  //   if(div2.style.display === 'none') {
  //     div2.style.display = ''
  //   }
  //   else {
  //     div2.style.display = 'none';
  //   }
  // })

  $('#btn').click(() => {
    $('@div2').toggle()
  })

  
  })


















