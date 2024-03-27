// Recupero la lista libri, ogni singolo libro
let listaLibri = document.querySelector('#listaLibri');
let libri = listaLibri.children; // HTMLCollection (un insieme di elementi e quindi oggetti HTML) --> NO ARRAY

console.log(libri);

[...libri].forEach(libro => {
    console.log(libro); // scrivo gli oggetti li
    console.log(libro.textContent); // scrivo i testi degli li
})

// firstElementChild
let primoLibro = listaLibri.firstElementChild.textContent;
console.log(primoLibro);

// lastElementChild
let ultimoLibro = listaLibri.lastElementChild.textContent;
console.log(ultimoLibro);