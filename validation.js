const form = document.querySelector('.contactform');
const submit = document.querySelector('.get-in-button');
const error = document.getElementById('emailerror');
const regex = /[A-Z]/;
var email = document.getElementById('email');

form.addEventListener('input', () => {
    console.log(email.value);
  if(regex.test(email.value) === true) {
    error.innerHTML = "Please enter the email without caps";
    error.classList.add('activerror');
    submit.classList.add('inactive');
    submit.disabled = true;
    return false;
    } else {
    error.innerHTML = "";
    submit.disabled = false;
    submit.classList.remove('inactive');
    error.classList.remove('activerror');
    return true;
    } 
  }
)
