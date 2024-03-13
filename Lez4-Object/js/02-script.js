//NOTAZIONE CON FUNZIONE COSTRUTTORE
function Studente(nome, cognome, matricola, email){
    //creo una propr nome alla quale associo = il valore del parametro nome 
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.email = email;

    this.presentati = function(){
        let presentazione = "Ciao, sono: " + this.nome + " " + this.cognome + " Email: " + this.email;

        return presentazione;
    }
}

let studente1 = new Studente("Andrea", "Trapani", 1, "andrea.trapani@mail.com");
let studente2 = new Studente("Claudia", "Pezzoli", 2, "caludia.pezzoli@mail.com");

console.log(studente1.nome + " " + studente1.cognome);
console.log(studente2.nome + " " + studente2.cognome);

//con aula sto costruendo un array di oggetti di tipo Studente
let aula = [
    new Studente("Andrea", "Trapani", 1, "andrea.trapani@mail.com"),
    new Studente("Claudia", "Pezzoli", 2, "caludia.pezzoli@mail.com"),
    new Studente("Giovanni", "Carotenuto", 3, "giov.caro@mail.com"),
    new Studente("Simone", "Ferraro", 4, "simo.ferraro@mail.com"),
    new Studente("Jacopo", "Tumiati", 5, "jacopo.t@mail.com"),
    new Studente("Valeria", "Zaru", 6, "vale.zaru@mail.com"),
    new Studente("Melania", "Perdisci", 7, "mel.perdisci@mail.com"),
    new Studente("Mirko", "Di Franco", 8, "mirko.difra@mail.com")
];

//Voglio stampare alcune prop dei miei studenti 
// for(let i = 0; i < aula.length; i++){
//     console.log(aula[i].nome + " " + aula[i].cognome);
// }

//FOREACH: da utilizzare quando siamo in presenza di array
//per ogni stud dell'aula parte una funzione anonima che fa qualcosa
aula.forEach(stud => {
    // console.log(stud.nome + " " + stud.cognome);
    console.log(stud.presentati());
});


let colori = ["Giallo", "Rosso", "Verde", "Blu"];
colori.forEach(colore =>{
    console.log(colore);
})