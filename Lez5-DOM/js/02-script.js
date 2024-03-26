// querySelectorAll('CSSsyntax')
// Recupera più elementi contemporaneamente, costruisce una NodeList (parente stretto degli array)

let lisSpesa = document.querySelectorAll('ul#listaSpesa li.txt-blue'); // nodelist
console.log(lisSpesa);

// leggo il contenuto del primo li
console.log(lisSpesa[0].innerHTML);
console.log(lisSpesa[0].textContent);

// modificare il contenuto del terzo li
lisSpesa[2].textContent = 'Pan di Stelle';

// recupero i testi di tutti gli li
[...lisSpesa].forEach(li => {
    console.log(li.textContent);
});

// voglio mettere inb rosso solo i libri applicando la classe txt-red
let lisLibri = document.querySelectorAll('ul#listaLibri li') // nodelist

for (let i = 0; i < lisLibri.length; i++) {
    lisLibri[i].setAttribute('class', 'txt-red');
}

// ATT: e se passo un id al querySelectorAll??
let liVino = document.querySelectorAll('#due'); // crea comunque una nodelist con un elemento all'interno

console.log(liVino);
liVino[0].textContent = 'Birra';