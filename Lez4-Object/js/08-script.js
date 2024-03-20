class Utente{
    constructor(nome, cognome, eta){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
}

let btnSub = document.getElementById("btnSub");

let elNome = document.getElementById("elNome");
let elCognome = document.getElementById("elCognome");
let elEta = document.getElementById("elEta");

let demo = document.getElementById("demo");
let feedback = document.getElementById("feedback");

function recuperaInfo(){
    let feed = "";

    let nome = elNome.value;
    let cognome = elCognome.value;
    let eta = elEta.value;

    if(nome != "" && cognome != "" && eta != ""){
        let mioUtente = new Utente(nome, cognome, eta);
        demo.innerHTML = stampaUtente(mioUtente);
    }else{
        if(nome == ""){
            feed += "<p>Hai dimenticato il nome</p>";
        }

        if(cognome == ""){
            feed += "<p>Hai dimenticato il cognome</p>";
        }

        if(eta == ""){
            feed += "Hai dimenticato l'età"
        }
        feedback.innerHTML = feed;
    }
}

/**
 * @param {Utente} utente 
 */
function stampaUtente(utente){
    let descrizione = `<p>Utente: ${utente.nome} ${utente.cognome} - età: ${utente.eta}</p>`;

    return descrizione;
}

btnSub.addEventListener("click", recuperaInfo);