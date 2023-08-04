



// window.alert('me agregue correctamente');

const DOM = document.querySelector('html');

console.log(DOM);

console.log(DOM.firstElementChild);
console.log(DOM.lastElementChild);

console.log(DOM.children);


// const identificador = document.getElementById('lorem');
// console.log(identificador);

// console.log(identificador.nextElementSibling);
// console.log(identificador.previousElementSibling);
// console.log(identificador.parentElement);

// const arrayClass = document.getElementsByClassName('card_list_item');
// console.log(arrayClass);

// const arrayTags = document.getElementsByTagName('a');
// console.log(arrayTags);

// const elemento = document.querySelector('p');
// console.log(elemento);

// const elemento = document.querySelector('#btn');
// console.log(elemento);

// const elemento = document.querySelector(
//     '.card');
// console.log(elemento);

const elemento = document.querySelectorAll(
    'a');
console.log(elemento[0].setAttribute('href','https://www.google.com/'));
console.log(elemento[1].setAttribute('href','https://www.yahoo.com/'));
console.log(elemento[2].setAttribute('href','https://www.msn.com/'));


