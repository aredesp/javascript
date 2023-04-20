function usuario(nombre, apellido, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
}

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let mail = document.getElementById('mail').value;

const usuario1 = new usuario(nombre, apellido, mail)

function newsletter() {
    document.getElementById('bienvenida').innerText = nombre;
    document.getElementById('exito').innerText = "Usted se ha suscripto con éxito"
}

// function newsletter() {
//     let nombre = document.getElementById('nombre').value;
//     let apellido = document.getElementById('apellido').value;
//     let mail = document.getElementById('mail').value;
//     document.getElementById('bienvenida').innerHTML = nombre;
//     document.getElementById('exito').innerText = "Usted se ha suscripto con éxito"
// }

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