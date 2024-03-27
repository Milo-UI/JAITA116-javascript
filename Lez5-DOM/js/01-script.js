// let demo = document.getElementById('demo');

// querySelector('CSSsyntax')
// # -> id
// . -> class
// p -> elemento html

// querySelector restituisce un unico elemento ALLA PRIMA OCCORRENZA, qualunque sia la sintassi

let demo = document.querySelector('#demo');
// let demo = document.querySelector('div#demo');

demo.innerHTML = 'Questo è il contenuto nuovo di #demo';

let li = document.querySelector('li');

let li3 = document.querySelector('#tre');
li3.innerHTML = 'Biscotti';

let li2 = document.querySelector('#listaSpesa li#due');
li2.innerHTML = 'Detersivo';

let li1 = document.querySelector('.txt-blue');

// voglio sapere cosa c'è scritto nel secondo li
let secondoLi = document.querySelector('li#due');
console.log(secondoLi.innerHTML);