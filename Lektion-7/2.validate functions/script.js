const form = document.querySelector('#form');


//Validerar varje input för sig
const validateFirstName = () => {
    const firstName = document.querySelector('#firstName')
    const firstNameError = document.querySelector('#firstName-error')
    
    if(firstName.value === '') {
        firstNameError.innerText = 'Du måste ange ett förnamn';
    }
    else if (firstName.value.length < 2) {
        firstNameError.innerText = ' du måste ange minst 2 teckn'
    }
    else {
        firstNameError.innerText = ''
    }
}

//Validerar alla inputs av typen text med samma funktion
const validate = (id) => {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');

    if(input.value === '') {
        error.innerText = 'Du måste ange ett namn';
    }
    else if (input.value.length < 2) {
        error.innerText = ' du måste ange minst 2 tecken'
    }
    else {
        error.innerText = ''
    }
}

form.addEventListener('submit' ,(e) => {
    e.preventDefault();

    // validateFirstName();

    validate('#firstName');
    validate('#lastName');
})



