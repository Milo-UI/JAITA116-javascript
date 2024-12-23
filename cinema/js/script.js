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

let titolo = document.querySelector('.titolo');
let locandina = document.querySelector('.locandina');
let attori = document.querySelector('.attori');
let durata = document.querySelector('.durata');
let anno = document.querySelector('.anno');
let genere = document.querySelector('.genere');
let linkFilm = document.querySelector('.link-film');


// class Film {
//     /**
//      * 
//      * @param {String} titolo 
//      * @param {String} locandina 
//      * @param {String[]} attori 
//      * @param {String} durata 
//      * @param {String} anno 
//      * @param {String} genere 
//      * @param {String} linkFilm 
//      */
//     constructor(titolo, locandina, attori, durata, anno, genere, linkFilm) {
//         this.titolo = titolo;
//         this.locandina = locandina;
//         this.attori = attori;
//         this.durata = durata;
//         this.anno = anno;
//         this.genere = genere;
//         this.linkFilm = linkFilm;
//     }
// }

let films = [];

// function scegliFilm() {

let filmScelti = [`http://www.omdbapi.com/?t=John+Wick&apikey=4214e970`, `http://www.omdbapi.com/?t=The+Prestige&apikey=4214e970`, `http://www.omdbapi.com/?t=Inception&apikey=4214e970`];

const trovaFilm = async filmScelto => {
    const response = await fetch(filmScelto);
    const data = await response.json();

    console.log(data);

    return data;
}

filmScelti.forEach(filmScelto => {
    // fetch(filmScelto)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(film => {
    //         let attori = film.Actors.split(', ');
    //         let generi = film.Genre.split(', ');
    //         let linkFilm = `https://it.wikipedia.org/wiki/${film.Title.replace(' ', '_')}`;

    //         // let filmScelto = new Film(film.Title, film.Poster, attori, film.Runtime, film.Year, generi, linkFilm)

    //         let filmScelto = {
    //             titolo: film.Title,
    //             locandina: film.Poster,
    //             attori: attori,
    //             durata: film.Runtime,
    //             anno: film.Year,
    //             genere: generi,
    //             linkFilm: linkFilm
    //         };

    //         films.push(filmScelto);

    //         if (films.length == 1) {
    //             mostraFilm(contatore);
    //         }
    //     })

    trovaFilm(filmScelto)
        .then(film => {
            let attori = film.Actors.split(', ');
            let generi = film.Genre.split(', ');
            let linkFilm = `https://it.wikipedia.org/wiki/${film.Title.replace(' ', '_')}`;

            // let filmScelto = new Film(film.Title, film.Poster, attori, film.Runtime, film.Year, generi, linkFilm)

            let filmScelto = {
                titolo: film.Title,
                locandina: film.Poster,
                attori: attori,
                durata: film.Runtime,
                anno: film.Year,
                genere: generi,
                linkFilm: linkFilm
            };

            films.push(filmScelto);

            if (films.length == 1) {
                mostraFilm(contatore);
            }
        })
        .catch(err => console.log(err));
});

console.log(films);
// }

// scegliFilm();

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

let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

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

let titoloRicerca = document.querySelector('.titoloRicerca');
let posterRicerca = document.querySelector('.posterRicerca');
let trama = document.querySelector('.trama');
let formCerca = document.querySelector('.cerca');

function cercaFilm() {
    let filmTitle = formCerca.filmTitle.value;
    filmTitle.replace(' ', '+');

    const URL = `http://www.omdbapi.com/?t=${filmTitle}&apikey=4214e970`;
    console.log(URL)

    // let mioFilm = {};

    // fetch(URL)
    //     .then(response => {
    //         return response.json()
    //     })
    trovaFilm(URL)
        .then(mioFilm => {
            // console.log(mioFilm);

            if (mioFilm.Response === 'False') {
                titoloRicerca.innerHTML = 'Film non trovato';
                posterRicerca.setAttribute('src', '');
                trama.innerHTML = '';
            } else {
                console.log(mioFilm.Title);
                stampaFilm(mioFilm.Title, mioFilm.Poster, mioFilm.Plot);
            }
        })
        .catch(err => console.log(err));
}

function stampaFilm(titoloFilm, posterFilm, tramaFilm) {
    titoloRicerca.innerHTML = titoloFilm;
    trama.innerHTML = `
        <h3>Trama di ${titoloFilm}:</h3>
        <p>${tramaFilm}</p>
    `;
    posterRicerca.setAttribute('src', posterFilm);
}

formCerca.addEventListener('submit', e => {
    e.preventDefault();
    cercaFilm();
});