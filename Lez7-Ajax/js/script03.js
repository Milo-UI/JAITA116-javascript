// Notazione letterale degli oggetti JS
let utente = {
    nome: 'Pippo',
    cognome: 'Rossi',
    eta: 30,
    email: 'nome@mail.it',
    materieStudiate: ['Javascript', 'Java']
};

// console.log(utente);

let utenteFormatoJSON = `{"nome": "Pippo", "cognome": "Rossi", "eta": "30", "email": "nome@mail.it", "materieStudiate": ["Javascript", "Java"]}`;

// console.log(utenteFormatoJSON); // string
// console.log(utenteFormatoJSON.nome); // undefined

// trasformo l'utenteFormatoJSON in un utente formato JS
let utenteFormatoJS = JSON.parse(utenteFormatoJSON);

// console.log(utenteFormatoJS); // object
// console.log(utenteFormatoJS.nome);

// Se abbiamo bisogno di inviare dati, possiamo utilizzare il metodo inverso
let studente = {
    nome: 'Marco',
    cognome: 'Bianchi',
    eta: 30,
    email: 'nome@mail.it',
    materieStudiate: ['Javascript', 'Java'],

    connettiAllaLezione: function() {
        return `Connesso alla lezione`;
    }
}

// console.log(studente);
// console.log(typeof studente);
// console.log(studente.nome);

// Per poter trasferire l'oggetto studente a un'altra tecnologia, lo devo trasformare in JSON
// Quando trasformo lo studente in stringa, i metodi non vengono minimamente calcolati o riportati
let studenteJSON = JSON.stringify(studente);

// console.log(studenteJSON);
// console.log(typeof studenteJSON);
// console.log(studenteJSON.nome);

/* ---------------------------------- FETCH --------------------------------- */

const URLquotes = "https://dummyjson.com/quotes";

fetch(URLquotes)
    .then(data => {
        return data.json();
    })
    .then(citazioni => {
        console.log(citazioni.quotes[0].quote);
    })