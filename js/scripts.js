// Queryselector
const heading = document.querySelector('.header__texto h2') //0 o 1 
heading.textContent = 'Nuevo Heading';
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual'

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');


console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load', function(){
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DomContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4)
// });

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...');
// }


// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario 

    console.log('enviando formulario');
});

// Eventos de los imputs y text area

const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    console.log(datos);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 500);
}

function mostrarformularioenviado(mensaje) {
    const enviado = document.createElement('P');
    enviado.textContent = mensaje;
    enviado.classList.add('enviado');

    formulario.appendChild( enviado );

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        enviado.remove();
    }, 500);

}