// Per assegnare una stringa come valore di una variabile, bisogna metterla tra virgolette (o apici)
let stringa = "Sono una stringa!";
console.log(stringa);

// Se la stringa deve contenere a sua volta degli apici (o apostrofi), bisogna far capire che quegli apici fanno parte della stringa e non sono attinenti al codice.
// Un modo è quello di usare il backslash (\), che è un carattere di escape, prima di ogni apertura e chiusura di apici
let url = "<a href=\"https://www.youtube.com/\">Vai a YouTube</a>";
let nomeLibro = 'L\'uomo del boh';
console.log(url, nomeLibro);

/* 
    ALTRI UTILIZZI DEL CARATTERE DI ESCAPE
    \'  apostrofo o apice singolo
    \"  apici doppi
    \\  backslash
    \r  a capo
*/

// Un'alternativa è quella di usare gli apici singoli per dichiarare la stringa e usare gli apici doppi dove servono all'interno della stringa o viceversa
let quote = 'Ieri mi ha detto solo "Ciao!"';
console.log(quote);

// Per concatenare stringhe tra loro, possiamo usare l'operatore di concatenazione +
let ourString = "Io vengo prima. " + "Io vengo dopo.";
console.log(ourString);

// Come per i numeri, possiamo usare l'operatore += per concatenare stringhe
let stringaConc = "Io vengo prima. ";
stringaConc += "Io vengo dopo.";
console.log(stringaConc);

// Si possono anche concatenare delle variabili alle stringhe
let myName = "Milo";
let miPresento = "Ciao! Mi chiamo " + myName + ". Tu come ti chiami?";
console.log(miPresento);

// Si possono quindi anche ottenere delle stringhe concatenando solo le variabili che contengono stringhe
let aggettivo = "fantastico!!";
let intro = "JavaScript è ";
console.log(intro += aggettivo);

// È possibile calcolare la lunghezza di una stringa utilizzando il metodo .length
let firstNameLength = 0;
let firstName = "Milo";

firstNameLength = firstName.length;
console.log(firstNameLength);
console.log(typeof firstNameLength);

// Se invece volessimo trovare la prima lettere di una stringa possiamo utilizzare la bracket notation
let firstLetterOfFirstName = firstName[0]; // in JavaScript si inizia a contare da 0 e non da 1. Se avessimo voluto prendere la terza lettera in Milo, avremmo dovuto scrivere firstName[2]
console.log(firstLetterOfFirstName);

// È possibile ricavare l'ultimo carattere di una stringa anche se non se ne conosce la lunghezza esatta
let nome = "Allen";
let lastLetterOfName = nome[nome.length - 1]; // -1 perché si parte a contare da 0
console.log(lastLetterOfName);

/* ----------------------------- Metodi stringhe ---------------------------- */
let txt = "Oggi ho svolto 8 ore di lezione";

// Metodi di ricerca
let search1 = txt.indexOf('lezione'); // restituisce l'indice in cui la parola inizia
console.log(search1);

let search2 = txt.lastIndexOf('e'); // restituisce indice dell'ultima occorrenza
console.log(search2);

let search3 = txt.charAt(3); // restituisce il carattere in quella posizione
console.log(search3);

let search4 = txt.indexOf('f'); // se il carattere non esiste restituisce -1
console.log(search4);

// Metodi per il taglio
let testo = "Sono le 5 e tutto va bene";

// I metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale
let taglio1 = testo.slice(4, 10);
console.log(taglio1);

let taglio2 = testo.substring(4, 10);
console.log(taglio2);

// Metodi per sostituzione
let affermazione = "Il miglior browser del mondo è Internet Explorer";

// Il metodo replace() restituisce una nuova stringa rimpiazzzando tutte le ricorrenze del pattern dato con una sostituzione
let sost = affermazione.replace("Internet Explorer", "Google Chrome");
console.log(sost);

// Il metodo toUpperCase() converte tutti i caratteri in maiuscolo
let upp = affermazione.toUpperCase();
console.log(upp);

// Il metodo toLowerCase() converte tutti i caratteri in minuscolo
let low = affermazione.toLowerCase();
console.log(low);

// Il metodo split() divide una stringa in una lista ordinata di sotto-stringhe, le raggruppa in un array e restituisce questo array.La divisione avviene cercando un pattern fornito come parametro tra le parentesi tonde del metodo e indica dove il metodo deve andare a separare.
// Fornendo come pattern una stringa vuota,il metodo separa ogni singolo carattere, spazi compresi
let string1 = "Ciao mi chiamo Milo!";

let arr1 = string1.split('');
console.log(arr1);

// Fornendo come pattern uno spazio, il metodo andrà a separare ogni volta che trova uno spazio
let string2 = "Ciao come stai";
let arr2 = string2.split(' ');
console.log(arr2);

// Se si parte invece da un array di stringhe, con il metodo join() è possibile ottenere una stringa unica che concatena tutti gli elementi dell'array separati da virgole oppure dal carattere specificato come parametro del metodo
let arr3 = ['M', 'I', 'L', 'O'];

// join('') ha come parametro una stringa vuota, quindi restituirà una stringa che concatena gli elementi dell'array senza alcun tipo di separazione
let string3 = arr3.join('');
console.log(string3);

/* -------------------------------------------------------------------------- */
/*                                  Esercizi                                  */
/* -------------------------------------------------------------------------- */
// Data una stringa, stamparla in console al contrario
// Punti in più se risolta in 2 righe max compreso il console.log
let strEs = "I topi non avevano nipoti";

/* ------------------------------- Esercizio 2 ------------------------------ */
// Elabora uno script per estrarre l'estensione di un file
// "immagineBG.jpg" -> "L'estensione del file è: jpg"

/* ------------------------------- Esercizio 3 ------------------------------ */
// Elabora uno script per fare la seguente manipolazione:
// oggi sono a lezione -> Oggi Sono A Lezione
// Uppercase della prima lettera di ogni singola parola