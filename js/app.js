var users = [];

function login() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  var user = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    showMessage('Inicio de sesión exitoso!');
  } else {
    showMessage('User o contraseña inválidos');
  }
}

function signup() {
  var username = document.getElementById('signupUsername').value;
  var password = document.getElementById('signupPassword').value;

  var isUsernameTaken = users.some(function(user) {
    return user.username === username;
  });

  if (isUsernameTaken) {
    showSignupMessage('Nombre de usuario ocuapdo. Elige otro');
  } else {

    var newUser = {
      username: username,
      password: password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Registro exitoso!');
    toggleForms();
  }
}

function showMessage(message) {
  var messageElement = document.getElementById('loginMessage');
  messageElement.innerText = message;
}

function showSignupMessage(message) {
  var signupMessageElement = document.getElementById('signupMessage');
  signupMessageElement.innerText = message;
}

function toggleForms() {
  var loginForm = document.getElementById('loginForm');
  var signupForm = document.getElementById('signupForm');

  loginForm.style.display = (loginForm.style.display === 'none') ? 'flex' : 'none';
  signupForm.style.display = (signupForm.style.display === 'none') ? 'flex' : 'none';
}

window.addEventListener('DOMContentLoaded', function() {
  var storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  } else {
    // Usuarios para prueba
    var defaultUsers = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' }
    ];
    users = defaultUsers;
    localStorage.setItem('users', JSON.stringify(defaultUsers));
  }

  var storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    showMessage('Welcome back, ' + storedUsername + '!');
  } else {
    toggleForms();
  }
});


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
}

function steam() {
    let x = parseInt(document.getElementById('preciobase').value);
    let y = 1.74;
    document.getElementById('resultado').innerHTML = x*y;
    document.getElementById('impuestos').innerText = "\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales";
}

function epic() {
    let x = parseInt(document.getElementById('preciobase').value);
    let y = 1.76;
    document.getElementById('resultado').innerHTML = x*y;
    document.getElementById('impuestos').innerText = "\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales\n 1% impuesto al sello\n 1% impuesto servicios digitales"
}

function origin() {
    let x = parseInt(document.getElementById('preciobase').value);
    let y = 1.80;
    document.getElementById('resultado').innerHTML = x*y;
    document.getElementById('impuestos').innerText = "\n45% percepción de ganancias y bienes personales\n8% impuesto PAIS\n21% IVA servicios digitales\n 1% impuesto al sello\n5% percepción de IIBB"
}

btnToast.addEventListener('click', ()=>{
    Toastify({
        text: "Gracias por suscribirte!",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "#104A65",
        },
        onClick: function(){} 
      }).showToast();
})

