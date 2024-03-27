//JSON = JavaScript Object Notation


//Questo oggetto JS va bene solo per la mia tecnologia, non è pronto per essere trasferito all'esterno
let persona = {
    nome: "Dario",
    cognome: "Mennillo",
    corsi: 4,
    presenza: true
}

console.log(persona.nome);

//Per poter trasferirlo presso una risorsa (endopoint di un server = url)  devo trasformarlo in JSON

//I JSON sono delle STRINGHE
let personaJSON = '{ "nome": "Dario", "cognome": "Mennillo", "corsi": 4, "presenza": true}';
console.log(personaJSON.nome); //undefined

//Esistono dei metodi che permettono di trasformare un oggetto in stringa e viceversa

//1. object.stringify() trasforma un oggetto JS in un oggetto JSON

//ATT: l'oggetto JS può essere definito con qualsiasi notazione: letterale, con costruttore, con classe
// let studente = {
//     nome: "Pippo",
//     cognome: "Rossi",
//     corso: "JAITA116",
//     presenza: true
// };

class Studente{
    constructor(nome, cognome, corso, presenza){
    this.nome = nome;
    this.cognome = cognome;
    this.corso = corso;
    this.presenza = presenza;
    }

    //applicando il metodo stringify questo metodo presentati () verrà bypassato
    presentati(){
        return `Ciao mi chiamo ${this.nome} ${this.cognome}`;
    }
}

let studente = new Studente("Pippo", "Rossi", "Jaita116", true);

//Per esempio adesso posso utilizzare studenteJSON come dato da inviare presso una API
let studenteJSON = JSON.stringify(studente);

console.log(studenteJSON);
console.log(typeof studenteJSON);

//2. object.parse() trasforma un oggetto formato JSON in un oggetto JS
//Ormai tutte le API rispondono con oggetti formato JSON, quindi nel chiamare una api riceveremo stringhe (JSON)

let docenteJSON = '{"nome": "Milo", "cognome": "Spandre", "materie" : "Javascript, HTML, CSS"}';

let docente = JSON.parse(docenteJSON); //Questo docente è un oggetto JS
console.log(docente.nome);

