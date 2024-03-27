let listaFilm = document.querySelector('#listaFilm');

// createElement() crea un nuovo elemento HTML (oggetto) passando il nome del tag
let nuovoLi = document.createElement('li'); // <li></li>


// createTextNode() crea un nodo testuale da agganciare a un parent
let nuovoTitoloFilm = document.createTextNode('The Game'); // The Game

// appendChild() aggancia al genitore un figlio
nuovoLi.appendChild(nuovoTitoloFilm); //<li>The Game</li>

listaFilm.appendChild(nuovoLi);

let nuovoLi2 = document.createElement('li');
nuovoLi2.textContent = 'Dumbo';

listaFilm.prepend(nuovoLi2);