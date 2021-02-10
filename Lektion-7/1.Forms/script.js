const regForm = document.querySelector('#regForm');
const role = document.querySelector('#role');


regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!(e.currentTarget.toc.checked)) {
        alert('You must accept the teams and conditions');
        return false;
    }

    // console.log(e.target)
    let firstName = e.currentTarget[0].value;
    let lastName = e.currentTarget.lastName.value;
    let address = e.currentTarget['address'].value;

    console.log(firstName, lastName);

    let user = {
        firstName: e.target.firstName.value,
        lastName: document.querySelector('lastName').value,
        address: e.currentTarget.address.value,
        role: role.value
    }


    console.log(user)
})