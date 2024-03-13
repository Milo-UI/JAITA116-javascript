let nome = "Dario"; 
let cognome = "Mennillo";
let eta = 34;

//NON posso descrivere un'entità complessa come una persona utilizzando variabili sconnesse tra di loro o addirittura un array
// let docenteJS = ["Salvatore", "Gennaro", 34];

//GLi oggetti servono a descrivere delle entità complesse, ovvero formate da proprietà diverse tra loro, cioè con tipi diversi

//NOTAZIONE LETTERALE, permette di creare un oggetto al "volo"
let docenteJS = {
//  proprietà dell'oggetto
//  chiave: valore
    nome: "Dario",
    cognome: "Mennillo",
    eta: 34,
    presenza: true,

//  metodo dell'oggetto
    salutaStudenti: function(){
        let saluto = "Ciao cari studenti.";
        return saluto;
    },

    presentati: function(){
        //THIS fa riferimento all'oggetto "contenitore" più vicino
        let presentazione = this.nome + " " + this.cognome + " età: " + this.eta + " anni.";
        return presentazione;
    }
}

//Come accedere all proprietà dell'oggetto, leggere il valore delle singole prop
console.log(docenteJS);
console.log(docenteJS.nome + " " + docenteJS.cognome);
console.log(docenteJS.eta);
console.log(docenteJS['presenza']); //notazione con parentesi quadre
console.log(docenteJS.salutaStudenti());

//posso anche cambiare il valore di determinate prop riassegnando un valore
docenteJS.eta = 35;
console.log(docenteJS.eta);

let demo = document.getElementById("demo"); //OSS: demo è un HTMLObject
let btn = document.getElementById("btn");

function presentaDocente(){
    demo.innerHTML = "<p>" + docenteJS.presentati() + " </p>";
}

btn.addEventListener("click", presentaDocente);

//Questi sotto sono degli oggetti builtIn di cui noi utilizziamo prop e metodi
// console.log();
// document.getElementById();
// elDemo.innerHTML = ""
