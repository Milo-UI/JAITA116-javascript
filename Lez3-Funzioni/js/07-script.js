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

let btnTweet = document.getElementById('btnTweet');









// ATTENZIONE: le funzioni degli event listener non hanno le parentesi tonde, MAI!!
// oggettoHTML.addEventListener("evento", funzione);
btnTweet.addEventListener('click', inviaTweet);