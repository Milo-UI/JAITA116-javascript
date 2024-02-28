let frutta = ["mela", "pesca", "ciliegia", "kiwi", "banana", "pera", "mandarino"];

frutta.push("arancia");
//Stampare una lista di frutta all'interno del mio ul

//1. Recupero il pezzo di html che mi interessa
//  nomeVariabile                         ID nell'HTML
let listaFrutta = document.getElementById("listaFrutta"); //ul

//2. Scrivo nell'ul cioè in listaFrutta

for(let i = 0; i < frutta.length; i++){
    listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>";
}

