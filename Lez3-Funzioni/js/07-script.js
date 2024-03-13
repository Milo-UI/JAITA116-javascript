/* 
    Crea uno script che permetta all'utente di postare un Tweet tramite una textarea.
    Una volta scritto il Tweet e inviato, stampalo, sotto <hr> e resetta la textarea.
    Al click del bottone 'Cambia colore', il testo del Tweet cambia colore.
    Controlla che il Tweet non sia vuoto o composto da soli spazi.

    ----------------------------
    Facoltativo:
    - Impostare un numero massimo di caratteri per il Tweet
    - collegare un file css e rendere guardabile la pagina
*/

let elTweet = document.getElementById('tweet');
let btnTweet = document.getElementById('btnTweet');
let btnColore = document.getElementById('btnColore');
let demo = document.getElementById('demo');

function inviaTweet() {
    let tweet = elTweet.value;

    if (tweet.trim() == "") {
        demo.innerHTML = "<p>Non hai scritto niente</p>"
    } else {
        demo.innerHTML = "<p>" + tweet + "</p>";
    }

    elTweet.value = '';
}

function cambiaColore() {
    /*  
        hasAttribute controlla se l'elemento ha quell'attributo, 
        setAttribute assegna un attributo e il suo valore, 
        removeAttribute rimuove un attributo
    */
    if (demo.hasAttribute('style')) {
        demo.removeAttribute('style');
    } else {
        demo.setAttribute('style', 'color: green;')
    }
}


// ATTENZIONE: le funzioni degli event listener non hanno le parentesi tonde, MAI!!
// oggettoHTML.addEventListener("evento", funzione);
btnTweet.addEventListener('click', inviaTweet);
btnColore.addEventListener('click', cambiaColore);