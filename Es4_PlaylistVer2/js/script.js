let elNomeUtente = document.getElementById('elNomeUtente');
let elCognomeUtente = document.getElementById('elCognomeUtente');
let elGenerePref = document.getElementById('elGenerePref');

let elTitolo = document.getElementById('elTitolo');
let elAlbum = document.getElementById('elAlbum');
let elArtista = document.getElementById('elArtista');
let elLinkYT = document.getElementById('elLinkYT');

let btnCarica = document.getElementById('btnCarica');
let btnStampaPlaylist = document.getElementById('btnStampaPlaylist');

let feedback = document.getElementById('feedback');

let nomePlaylist = document.getElementById('nomePlaylist');
let elPlaylist = document.getElementById('elPlaylist');

/* ------------------------------- versione 1 ------------------------------- */

class Utente {
    /**
     * @param {string} nome 
     * @param {string} cognome 
     * @param {string} generePref 
     * @param {Canzone[]} playlist 
     */
    constructor(nome, cognome, generePref, playlist) {
        this.nome = nome;
        this.cognome = cognome;
        this.generePref = generePref;
        this.playlist = playlist;
    }

    aggiungiCanzone(canzone) {
        this.playlist.push(canzone);
    }

    stampaInfo() {
        let infoUtente = `Playlist di ${this.nome} ${this.cognome}`;
        return infoUtente;
    }
}

class Canzone {
    constructor(titolo, album, artista, linkYT) {
        this.titolo = titolo;
        this.album = album;
        this.artista = artista;
        this.linkYT = linkYT;
    }

    stampaCanzone() {
        let infoCanzone = `<span>${this.titolo}</span> <span>${this.album}</span> <span>${this.artista}</span> <a class="btn" href="${this.linkYT}" target="_blank">Ascolta su YouTube</a>`;
        return infoCanzone;
    }
}

let mioUtente;
// console.log(mioUtente);

function creaUtente() {
    let nome = elNomeUtente.value;
    let cognome = elCognomeUtente.value;
    let generePref = elGenerePref.value;

    mioUtente = new Utente(nome, cognome, generePref, []);
}

function aggiungiCanzone() {
    if (mioUtente == undefined) {
        creaUtente();
    }

    let titolo = elTitolo.value;
    let album = elAlbum.value;
    let artista = elArtista.value;
    let linkYT = elLinkYT.value;

    let nuovaCanzone = new Canzone(titolo, album, artista, linkYT);

    mioUtente.aggiungiCanzone(nuovaCanzone);

    elTitolo.value = '';
    elAlbum.value = '';
    elArtista.value = '';
    elLinkYT.value = '';

    console.log(mioUtente);
}

function stampaPlaylist() {
    elPlaylist.innerHTML = '';

    let playlist = '';

    mioUtente.playlist.forEach(canzone => {
        playlist += `<li>${canzone.stampaCanzone()}</li>`
    });

    elPlaylist.innerHTML = playlist;

    nomePlaylist.innerHTML = `${mioUtente.stampaInfo()}`;
}

btnCarica.addEventListener('click', aggiungiCanzone);
btnStampaPlaylist.addEventListener('click', stampaPlaylist);