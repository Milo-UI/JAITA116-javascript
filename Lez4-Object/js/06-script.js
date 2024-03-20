/* 
    Progettare un array di automobili che contiene alcuni oggetti, con le proprietà
        - marca
        - modello
        - colore
        - alimentazione
        - anno
        - cavalli

    Quindi:
    - Visualizzare tutti i dati in console
    - Cancellare da tutte le auto la proprietà cavalli
    - Modificare la proprietà anno solo nelle auto di colore bianco, impostandola a 2024
*/

class VeicoloTerreste{
    constructor(tipo, numRuote, marca, modello, alimentazione ){
        this.tipo = tipo;
        this.numRuote = numRuote;
        this.marca = marca;
        this.modello = modello;
        this.alimentazione = alimentazione;
    }
}

class Automobile extends VeicoloTerreste {

    
    constructor(tipo, numRuote, marca, modello, alimentazione, colore, anno, cavalli) {

        super(tipo, numRuote, marca, modello, alimentazione)

        this.colore = colore;
        this.anno = anno;
        this.cavalli = cavalli;
    }

    descrivi(){
        let descrizione = `${this.tipo}: ${this.marca} ${this.modello} ${this.colore}`;
        return descrizione;
    }
}

let miaAuto = new Automobile("Automobile", 4,"Peugeot", "2008", "rossa", "benzina", 2019, 1300);


class Pilota{
    /**JS Doc
     * @param {string} nome 
     * @param {string} cognome 
     * @param {number} eta 
     * @param {Automobile} auto 
     */
    constructor(nome, cognome, eta, auto){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.auto = auto
    }

    descrivi(){
        let descrizione = `Pilota: ${this.nome} ${this.cognome} ${this.auto.descrivi()}`;
        return descrizione;
    }
}

let mioPilota = new Pilota("Dario", "Mennillo", 34, miaAuto);
delete mioPilota.eta;

console.log(mioPilota.descrivi());


let autosalone = [
    new Automobile("Moto", 2, "Kawasaki", "Z750", "benzina", "nero", 2013, 750),
    new Automobile("Auto", 4, "Ferrari", "Enzo", "benzina", "nero", 1967, 2100),
    new Automobile("Auto", 6, "Alfred", "Bat Mobile", "vegana", "nero", 1950, 3400)
]

let elListaVeicoli = document.getElementById("elListaVeicoli");

function stampaVeicoli(){

    autosalone.forEach(auto => {
        elListaVeicoli.innerHTML += `<li>${auto.descrivi()}</li>`;
    })

}

stampaVeicoli();