const form = document.querySelector('form');
const submit = document.querySelector('get-in-button');
const email =document.getElementById('email');
const error = email.nextElementSibling;
const emailRegExp = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

submit.addEventListener('click', () => {
  if(!email.value.match(emailRegExp)){
    error.innerHTML = "Please enter the email without caps";
    return false;
  }
error.innerHTML = "" ;
return true;
}
)


