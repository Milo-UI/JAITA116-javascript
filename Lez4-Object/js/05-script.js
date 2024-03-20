class Persona {
    constructor(nome, cognome, eta, genere, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }

    saluta() {
        console.log(`Ciao sono ${this.nome}`);
    }
}

// La parola chiave extends consente di sfruttare l'ereditarietà, ovvero la possibilità di estendere una classe genitore attraverso una classe figlia, la quale eredita tutte le caratteristiche della classe genitore
class Docente extends Persona {
    constructor(nome, cognome, eta, genere, interessi, materia) {
        // super richiama le proprietà ereditate dal genitore, consentendo di fare riferimento alla superclasse
        super(nome, cognome, eta, genere, interessi);
       
        this.materia = materia;
    }

    riprendiStudente(nomeStudente) {
        console.log(`${nomeStudente} stai attento!`);
    }

    presentati() {
        console.log(`Buongiorno, sono ${this.nome} ${this.cognome} e sarò 
        ${(this.genere == 'Maschio') ? 'il vostro' : 'la vostra'} docente di ${this.materia}.`);
    }
}

let docenteJS = new Docente('Dario', 'Mennillo', 23, 'Maschio', ['Netflix'], 'JavaScript');
let docenteJava = new Docente('Anna', 'Rossi', 23, 'Femmina', ['Netflix'], 'Java');
console.log(docenteJS);
console.log(docenteJS.materia);
docenteJS.riprendiStudente('Michael');
docenteJS.saluta();
docenteJS.presentati();
docenteJava.presentati();