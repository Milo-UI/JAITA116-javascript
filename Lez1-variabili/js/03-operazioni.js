/* 
    OPERATORI
    Un'espressione è una combinazione di valori, variabili e operatori che rappresentano un nuovo valore

    Le espressioni si basano su elementi chiamati operatori, che ci permettono di creare un unico valore a partire da uno o più valori

    - Operatori di assegnazione     =
    - Operatori aritmetici          + - * / ++ -- %
    - Operatori per stringhe        +
    - Operatori di confronto        < <= > >= == !=
    - Operatori logici              && || ! (and, or, not)
*/

// Semplici operazioni
let somma = 10 + 5;
let sottrazione = 10 - 5;
let moltiplicazione = 10 * 5;
let divisione = 10 / 5;

console.log("somma = " + somma + ", sottrazione = " + sottrazione + ", moltiplicazione = " + moltiplicazione + ", divisione = " + divisione);

// Possiamo anche incrementare di un'unità un valore numerico in una variabile senza per forza scrivere +1
let aggUno = 89;
aggUno++;
console.log(aggUno);

// Si può fare la stessa cosa per decrementare
let sottUno = 98;
sottUno--;
console.log(sottUno);

// Possiamo utilizzare JavaScript anche per calcolare il resto. Questa operazione può essere usata anche per determinare se un numero è pari o dispari: se dividendo il velore per 2 il risultato è un numero intero, allora il numero è pari
let resto;
resto = 11 % 3; // Il 3 sta 3 volte nell'11, 3+3+3 = 9, per arrivare a 11 manca 2, quindi il risultato è 2
console.log(resto);

// Essendo una pratica comune quella di aggiungere sottrarre, ecc un numero al valore di una variabile, esiste un modo veloce per ottenere il risultato
let a = 3;
let b = 17;
let c = 12;
let d = 5;

// Metodo lungo
a = a + 12;
b = b - 9;
c = c * 7;
d = d / 2;
console.log(a, b, c, d);

// Metodo veloce
a += 12;
b -= 9;
c *= 7;
d /= 2;

/* -------------------------------- Esercizio 1 ----------------------------- */
// Chiediamo all'utente in che anno è nato e diciamogli quanti anni ha
let annoNascita = prompt('In che anno sei nato?');
let annoCorrente = 2024;
let eta = annoCorrente - annoNascita;
let messaggio = "<h2>Quest'anno avrai " + eta + " anni</h2>";

document.write(messaggio);

/* ------------------------------- Esercizio 2 ------------------------------ */
// Scrivere un programma che calcola il perimetro e l’area di un triangolo avente i lati della seguente lunghezza: 5,6,7
let lato1 = 5;
let lato2 = 6;
let lato3 = 7;

let perimetro = lato1 + lato2 + lato3;
console.log(perimetro);

let semiPerimetro = perimetro / 2;

let area = Math.sqrt(semiPerimetro * ((semiPerimetro - lato1) * (semiPerimetro - lato2) * (semiPerimetro - lato3)));

console.log(area);