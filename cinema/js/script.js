/* ------------------------------ GESTIONE MENÙ ----------------------------- */

let btnMenu = document.querySelector('.main-header .menu-icon');
let menu = document.querySelector('.main-header');

function addMenuClass() {
    menu.classList.toggle('is-mobile-open');

    if (menu.classList.contains('is-mobile-open')) {
        btnMenu.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };
};

btnMenu.addEventListener("click", addMenuClass);

/* --------------------------- FINE GESTIONE MENÙ --------------------------- */

/* --------------------------- GESTIONE CAROSELLO --------------------------- */

let titolo = document.querySelector('#titolo');
let locandina = document.querySelector('#locandina');
let attori = document.querySelector('#attori');
let durata = document.querySelector('#durata');
let anno = document.querySelector('#anno');
let genere = document.querySelector('#genere');
let linkFilm = document.querySelector('#linkFilm');


class Film {
    /**
     * 
     * @param {String} titolo 
     * @param {String} locandina 
     * @param {String[]} attori 
     * @param {String} durata 
     * @param {String} anno 
     * @param {String} genere 
     * @param {String} linkFilm 
     */
    constructor(titolo, locandina, attori, durata, anno, genere, linkFilm) {
        this.titolo = titolo;
        this.locandina = locandina;
        this.attori = attori;
        this.durata = durata;
        this.anno = anno;
        this.genere = genere;
        this.linkFilm = linkFilm;
    }
}

let films = [];

function scegliFilm() {

    let filmScelti = [`http://www.omdbapi.com/?t=John+Wick&apikey=4214e970`, `http://www.omdbapi.com/?t=The+Prestige&apikey=4214e970`, `http://www.omdbapi.com/?t=Inception&apikey=4214e970`];

    filmScelti.forEach(filmScelto => {
        fetch(filmScelto)
            .then(response => {
                return response.json();
            })
            .then(film => {
                let attori = film.Actors.split(', ');
                let generi = film.Genre.split(', ');
                let linkFilm = `https://it.wikipedia.org/wiki/${film.Title.replace(' ', '_')}`;

                let filmScelto = new Film(film.Title, film.Poster, attori, film.Runtime, film.Year, generi, linkFilm)

                films.push(filmScelto);

                if (films.length == 1) {
                    mostraFilm(contatore);
                }
            })
    });

    console.log(films);
}

scegliFilm();

function mostraFilm(indice) {
    // console.log(films[indice]);

    linkFilm.setAttribute('href', films[indice].linkFilm);

    titolo.innerHTML = films[indice].titolo;

    locandina.setAttribute('src', films[indice].locandina);
    locandina.setAttribute('alt', 'Film in sala: ' + films[indice].titolo);

    attori.innerHTML = '';
    films[indice].attori.forEach(function(attore) {
        attori.innerHTML += `<li><a href="https://it.wikipedia.org/wiki/${attore}" target="_blank">${attore}</a></li>`;
    });

    durata.innerHTML = `Durata del film: ${films[indice].durata}`;

    anno.innerHTML = 'Anno di uscita: ' + films[indice].anno;

    genere.innerHTML = 'Genere: ';
    films[indice].genere.forEach(function(genereFilm) {
        genere.innerHTML += `<span>${genereFilm}</span>`;
    });
}

let contatore = 0;
// mostraFilm(contatore);

let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');

function nextMovie() {
    if (contatore < films.length - 1) {
        contatore++;
    } else {
        contatore = 0;
    }
    mostraFilm(contatore);
}

function prevMovie() {
    if (contatore == 0) {
        contatore = films.length - 1;
    } else {
        contatore--;
    }
    mostraFilm(contatore)
};

btnPrev.addEventListener('click', prevMovie);
btnNext.addEventListener('click', nextMovie);

/* ------------------------- FINE GESTIONE CAROSELLO ------------------------ */

/* -------------------------- GESTIONE RICERCA FILM ------------------------- */

let titoloRicerca = document.querySelector('#titoloRicerca');
let posterRicerca = document.querySelector('#posterRicerca');
let trama = document.querySelector('#trama');

let btnCerca = document.querySelector('#btnCerca');

function cercaFilm() {
    let filmTitle = document.querySelector('#filmTitle').value;
    filmTitle.replace(' ', '+');

    const URL = `http://www.omdbapi.com/?t=${filmTitle}&apikey=4214e970`;
    console.log(URL)

    // let mioFilm = {};

    fetch(URL)
        .then(response => {
            return response.json()
        })
        .then(mioFilm => {
            console.log(mioFilm);
            // mioFilm = data;

            // console.log('Il mio film è: ', mioFilm);

            if (mioFilm.Title == undefined) {
                titolo.innerHTML = 'Film non trovato';
                poster.setAttribute('src', '');
                trama.innerHTML = '';
            } else {
                console.log(mioFilm.Title);
                stampaFilm(mioFilm.Title, mioFilm.Poster, mioFilm.Plot);
            }
        })
        .catch(error => {
            console.log(error);
        })

    function stampaFilm(titoloFilm, posterFilm, tramaFilm) {
        titoloRicerca.innerHTML = titoloFilm;
        trama.innerHTML = `<h3>Trama di ${titoloFilm}:</h3>
                            <p>${tramaFilm}</p>`
        posterRicerca.setAttribute('src', posterFilm);
    }
}

btnCerca.addEventListener('click', cercaFilm);