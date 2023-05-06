function usuario(nombre, apellido, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
}

let nombre = document.getElementById("name").value;
let apellido = document.getElementById("last-name").value;
let mail = document.getElementById("mail").value;

const usuario1 = new usuario(nombre, apellido, mail)

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

