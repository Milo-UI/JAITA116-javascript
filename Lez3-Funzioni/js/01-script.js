//dichiaro una funzione
function saluta(){
    //nome e cognome sono variabili LOCALI, cioè visibili solo all'interno della funzione stessa
    let nome = "Dario";
    let cognome = "Mennillo";
    console.log("Ciao " + nome + " " + cognome);
}

//richiamo la funzione per poter eseguire il codice all'interno
saluta();

//NON POSSO accedere a nome e cognome dichiarati nella funzione
// console.log(nome);
// console.log(cognome);

//Questo nome e cognome sono VARIABILI GLOBALI, ovvero con uno scope, una visibilità globale, visibili ovunque dentro e fuori le funzioni. 
//ATT: a parità di nome ha la precedenza la variabile locale
let nome = "Pippo";
let cognome = "Rossi";

function salutaLaltro() {
    let cognome = "Verdi";
    //iun questo caso nome è globale, cognome é locale
    console.log("Ciao " + nome + " " + cognome);
}

salutaLaltro();


//ESEMPIO 

let demo = document.getElementById("demo");

function salutaUser(){
    let username = window.prompt("Ciao utente, come ti chiami ?");
    demo.innerHTML = "<h1> Ciao " + username + " </h1>";
}


salutaUser();

//PAUSAAAAAA e successivamente, if e for con var dichiarate

for(let i = 0; i < 3; i++){
    console.log("Ciao " + i);
    //uso let in un costrutto -> creo una variabile locale
    let nomePersona = "Anna";
    console.log(nomePersona);

    //uso var in un costrutto -> creo una variabile globale
    var cognomePersona = "Bianchi";
    console.log(cognomePersona);
}

console.log(cognomePersona); //questa è visibile poiché dichiarata con var nel for
console.log(nomePersona); //questa NON è visibile poiché dichiarata con let nel for
console.log(i);