//Duplice natura del simbolo +
let numero1 = 5; //Number
let numero2 = "3"; //String

let somma = numero1 + numero2; //string poiché JS interpreta prima come string
let prodotto = numero1 * numero2;
let quoziente = numero1 / numero2;
let differenza = numero1 - numero2;


//cast del dato numero2
let sommaVera = numero1 + Number(numero2);

console.log(somma);
console.log(prodotto);
console.log(quoziente);
console.log(differenza);
console.log(sommaVera);

// let eta = prompt("Quanti anni hai ? ") ;

// let eta10Anni = Number(eta) + 10;

// console.log("Tra 10 anni avrai: " + eta10Anni);


///////////////////////////////////////////////////
//              0       1         2        3
let frutta = ["mela", "pera", "banana", "kiwi"];

console.log(frutta[3]);
console.log(frutta[frutta.length - 1]);

let numeriLotto = [2,90,45,77,6];

let arrayMisto = ["mela", 3, "kiwi",1, "banana", 2, "mela", 4, true];
console.log(arrayMisto);

let docente = ["Dario", "Mennillo", "JAITA116", true, 34, 2];

//Voglio stampare in console l'array frutta
console.log(frutta[0]);
console.log(frutta[1]);
console.log(frutta[2]);
console.log(frutta[3]);
console.log(frutta[4]);

for(let i = 0; i < frutta.length; i++){
    console.log(frutta[i]);
}

// Posso stamapare in console tutto l'array
console.log(frutta);

// Posso stampare nella pagina l'array
document.write("<p>" + frutta + "</p>");

for(let i = 0; i < frutta.length; i++){
    document.write("<p> " + frutta[i] + " </p>");
}

