// Costruisci un oggetto con notazione letterale che descriva un'automobile. Assegna una serie di prop che ritieni opportune e una in particolare "status: false". Costruisci un metodo per spegnere e accendere l'auto modificando il valore della prop status. Costruisci anche un metodo descrivi() che descrive l'auto


let auto = {
    marca: "Fiat",
    modello: "127",
    colore: "verde cloaca",
    targa: "TO123NM",
    marce: 4,
    ruote: 4,
    velMax: 120,
    velAttuale: 0,

    status: false,

    accendiSpegni(){
        //qui modifico una prop stessa dell'oggetto 
        this.status = !this.status;

        if(this.status){
            return "L'auto è accesa. Status: " + this.status;
        }else{
            return "L'auto è spenta. Status: " + this.status;
        }
    },

    modificaVelAtt(vel){
        this.velAttuale += vel;
    },

    descrivi(){
        let descrizione = "Marca: " + this.marca + " modello: " + this.modello + " Status :" + this.status + " . Colore: " + this.colore + " Vel Attuale: " + this.velAttuale;
        
        return descrizione;
    }    
}

console.log(auto);
console.log(auto.descrivi());

console.log(auto.accendiSpegni()); //accendo
console.log(auto.descrivi());  //è accesa

console.log(auto.accendiSpegni()); //spengo
console.log(auto.descrivi()); // è spenta


auto.modificaVelAtt(50);
auto.modificaVelAtt(-20);
auto.modificaVelAtt(100);
console.log(auto.descrivi());


//Costruisci una funzione costruttore per descrivere il corso che stai seguendo. Tra le varie prop deve essere presente la prop "studenti: string[]". Dovranno essere presenti i seguenti metodi: stampaListaStudenti() e aggiungiStudente(nomeStudente)

/**JSDOC
 * 
 * @param {*} titolo 
 * @param {*} numMaxStud 
 * @param {String[]} studenti 
 * @param {*} respoCorso 
 */
function Corso(titolo, numMaxStud, studenti, respoCorso){
    this.titolo = titolo;
    this.numMaxStud = numMaxStud;
    this.studenti = studenti;
    this.respoCorso = respoCorso;

    this.stampaListaStudenti = function(){
        this.studenti.forEach(studente => {
            console.log(studente);
        })
    }
    
    this.aggiungiStudente = function(studente){
        this.studenti.push(studente);
    }
}

let studentiIscritti = ["Francesco Testa", "Andrea Di Fiore", "Claudia Pezzoli"];

let mioCorso = new Corso("JAITA116", 30, studentiIscritti, "Laura Rodofile");

console.log(mioCorso);

mioCorso.aggiungiStudente("Simone Ferraro");
mioCorso.stampaListaStudenti();