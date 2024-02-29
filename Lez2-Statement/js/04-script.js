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
let colori = ["verde", "rosso", "blu", "bianco", "giallo"];

for (let i = 0; i < 5; i++) {
    console.log(colori[i]); // Stampa in console l'elemento dell'array con indice i
}

//tutti gli altri tipi di for
//Nested Statement