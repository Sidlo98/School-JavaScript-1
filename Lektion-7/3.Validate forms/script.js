      const regForm = document.querySelector('#regForm');
      const email = document.querySelector('#email')
      const inputs = document.querySelectorAll('input');

      const validate = (id) => {
        let input = document.querySelector(id);
        
        if(input.value.trim() === '' || input.value.length < 2) {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
      
          input.focus();
          return false;
      
        } else {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          return true;
        }
      }

      const validateEmail = (_email) => {
        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_email.value)) {
          _email.classList.add('is-valid');
          _email.classList.remove('is-invalid');
          return true;
        }
        else {
          _email.classList.remove('is-valid');
          _email.classList.add('is-invalid');
          _email.focus();
          return false;
        }
      }
      
      inputs.forEach(input => {
        input.addEventListener('keyup', function(e) {
          // console.log(e.currentTarget.id);
          // console.log(input.id);
          // console.log(this.id);
          let id = '#' + input.id;

          if(input.type === 'text')
          validate(id);
          else
          validateEmail(input);
        })
      })



      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validate('#firstName');
        validate('#lastName');
        // validate('#email');
        validateEmail(email);

        if(validateEmail(email) && validate('#firstName') && validate('#lastName')) {
          console.log('Success!');
        }
        else {
          console.log('nope!');
        }
      })

    