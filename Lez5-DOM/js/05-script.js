let imgPianta = document.querySelector('#imgPianta');

imgPianta.setAttribute('src', './img/pianta-1.jpg');
imgPianta.setAttribute('alt', 'Pianta dai petali rosa');

// Dato un array di immagini, sostituire l'immagine ogni 3 secondi
let piante = ['pianta-1', 'pianta-2', 'pianta-3'];

let i = 0;

setInterval(() => {

    i++;

    if (i == piante.length) {
        i = 0;
    }

    let path = `./img/${piante[i]}.jpg`;

    imgPianta.setAttribute('src', path);

    // console.log(imgPianta.getAttribute('src'));

}, 3000);

let classeDiH3 = document.querySelector('#titoloFondo').getAttribute('class');
console.log(classeDiH3);