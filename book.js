let menu = document.querySelector('#navmenu');
let nav = document.querySelector('#menu');

menu.onclick = () => {
  menu.classList.toggle('bx');
  nav.classList.toggle('open');
};

function form() {
  var name = document.getElementById('name').value.trim();
  var number = document.getElementById('number').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name.length === 0) {
    alert('Please enter your name.');
    return false;
  }
  if (number.length === 0) {
    alert('Please enter your number.');
    return false;
  }
  if (email.length === 0) {
    alert('Please enter your email.');
    return false;
  }
  if (password.length === 0) {
    alert('Please enter your password.');
    return false;
  }
  if (message.length === 0) {
    alert('Please enter your message.');
    return false;
  }
  document.getElementById('form').reset();
  alert('Contact form submitted successfully.');
  return true;
}
