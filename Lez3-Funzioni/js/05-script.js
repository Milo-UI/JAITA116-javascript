/* -------------------------------------------------------------------------- */
/*                                  FUNZIONI                                  */
/* -------------------------------------------------------------------------- */

/* 
    Le funzioni ci permettono di scrivere codice riutilizzabile.
    Sono composte da:
        - parola chiave function
        - nome della funzione
        - una lista di parametri/argomenti tra parentesi tonde e separati da virgole
        - il blocco di codice da eseguire contenuto tra parentesi graffe
*/

function saluta() {
    console.log('Ciao');
}

function chiediEta() {
    console.log('Quanti anni hai?');
}

function chiediProfessione() {
    console.log('Che lavoro fai?');
}

function eseguiTutto() {
    saluta();
    chiediEta();
    chiediProfessione();
}

eseguiTutto();

/* ---------------------------------- SCOPE --------------------------------- */
/* 
    È possibile dichiarare delle variabili all'interno delle funzioni. Queste variabili sono accessibili soltanto all'interno della funzione, hanno uno scope locale.
    Quindi lo scope (o ambito di visibilità) di una variabile è la parte di uno script all'interno della quale si può fare riferimento a essa.
*/

function benvenuto() {
    // variabili locali
    let username = 'Milo';
    let messaggio = 'Ciao ' + username + ', benvenuto sul sito!';
    console.log(messaggio);
}

benvenuto();
// console.log(messaggio);

/* -------------------------------- PARAMETRI ------------------------------- */
/* 
    I parametri sono dei segnaposto per valori che verranno poi assegnati alla funzione quando viene chiamata la funzione
*/
function calcolaArea(altezza, larghezza) {
    let area = altezza * larghezza;
    return area;
}

let areaRett = calcolaArea(4, 5);
console.log("L'area vale: " + areaRett);