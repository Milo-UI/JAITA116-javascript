/* 
    localStorage e sessionStorage permettono di salvare le coppie key/value nel browser.

    Le due archiviazioni hanno gli stessi metodi e proprietà:
    - setItem(key, value):  memorizza la coppia key/value
    - getItem(key):         lettura del valore della key
    - removeItem(key):      rimuove la key e il relativo value
    - clear():              rimuove tutti gli elementi
    - key(index):           lettura della key all'indice index
    - length:               il numero di oggetti archiviati
*/

// Salvo un dato in localStorage
localStorage.setItem('nome', 'Milo');
console.log(localStorage.key(0));
console.log(localStorage.getItem('nome'));

// Funzione che si occupa di guardare in localStorage per vedere se esiste un utente connesso
let nomeUser = 'Dario';
localStorage.setItem('nomeUtente', nomeUser);

function verificaSessione() {
    let utenteConnesso = localStorage.getItem('nomeUtente');

    if (utenteConnesso != null) {
        console.log("Benvenuto " + utenteConnesso);
    } else {
        console.log('Esegui il login');
    }
}

document.addEventListener('DOMContentLoaded', verificaSessione);