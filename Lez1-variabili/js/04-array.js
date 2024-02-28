/* 
    Gli array ci permettono di memorizzare un intero elenco di valori correlati tra loro.
    Sono oggetti 0-based, cioè a ogni elemento viene assegnato un indice partendo da 0.

    - Le parentesi quadre indicano l'inizio e la fine di un array.
    - Ogni elemento è separato da virgole
    - Si possono aggiungere elementi di qualsiasi tipo (string, number, boolean...)
*/
let mioArray = ["Milo", 32];

// Quando un elemento in un array è un altro array, viene chiamato nested o annidato
let docenti = [
    ["Milo Spandre", "JavaScript"],
    ["Davide Ghione", "HTML e CSS"]
];
console.log(docenti);

// Si può estrarre un singolo elemento specifico utilizzando la bracket notation, andando a richiamare l'indice dell'array
let colori = ['Blu', 'Rosso', 'Verde', 'Giallo', 'Viola', 'Rosa'];

let primoEl = colori[0];
let secondoEl = colori[1];

console.log(primoEl);
console.log(secondoEl);

/* ---------------------------- Cambiare elementi --------------------------- */
// Oltre che per estrapolare un elemento, si può usare l'indice per modificare l'array cambiando un elemento
colori[1] = "Arancione";
console.log(colori);

/* --------------------------- Aggiungere elementi -------------------------- */
// Si possono aggiungere elementi alla FINE di un array con la funzione push
colori.push('Azzurro', 'Nero');
console.log(colori);

// Se invece si volesse aggiungere un elemento all'INIZIO di un array, si può fare con la funzione unshift()
colori.unshift('Bianco');
console.log(colori);

/* --------------------------- Rimuovere elementi --------------------------- */
// Si può rimuovere l'ULTIMO elemento di un array con la funzione pop
colori.pop();
console.log(colori);

// Se invece si volesse rimuovere il PRIMO elemento, si userebbe la funzione shift
colori.shift();
console.log(colori);

/* -------------------------------- Ciclo for ------------------------------- */
/* 
    Il ciclo for è un loop che esegue un blocco di codice per un numero determinato di volte deciso dalla sua condizione.
    La sintassi prevede:
    - Parola chiave for
    - parentesi tonde che contengono gli elementi necessari per porre la condizione
        - inizializzazione
        - condizione
        - aggiornamento
    - parentesi graffe che contengono il blocco di codice da eseguire finché la condizione viene rispettata
*/
// Il ciclo for seguente stamperà in console i primi 5 elementi dell'array. Tra le parentesi tonde inizializza una variabile i (indice) e le dà valore 0, pone la condizione che questa variabile debba essere minore di 5 e ogni volta che la condizione viene rispettata, esegue il blocco di codice e incrementa di 1 il valore di i. Quando il valore supererà 4, la condizione non verrà più rispettata e il blocco di codice nbon verrà eseguito un'altra volta
for (let i = 0; i < 5; i++) {
    console.log(colori[i]); // Stampa in console l'elemento dell'array con indice i
}

// Se volessimo stampare l'intero array, possiamo usare il metodo length(). Questo perché se mettiamo un numero fisso, ma l'array viene modificato con l'aggiunta o la rimozione di elementi, non abbiamo la certezza che vengano stampati tutti oppure ci prova a stampare più elementi di quanti ce ne siano e non trovandoli ci restituisce undefined
for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

/* -------------------------------------------------------------------------- */
/*                                  Esercizio                                 */
/* -------------------------------------------------------------------------- */
/* 
    Lista della spesa:
    - Creare due array.
        - Il primo contiene la lista dei prodotti da comprare
        - Il secondo i prezzi dei prodotti
    - Stampare in console il secondo elemento dell'array e il suo prezzo
    - Popolare la lista della spesa che ha id lista con un list element per ogni prodotto che contenga il nome del prodotto e il suo costo
    - Calcolare il totale dei prezzi dei prodotti e scriverlo nel paragrafo con id totale
*/
// Esempio per recuperare un elemento HTML tramite il suo ID
let elLista = document.getElementById('lista');
let elTotale = document.getElementById('totale');

// Esempio di stampa in un elemento HTML
// elTotale.innerHTML = "Costo totale della spesa = €" + totale;