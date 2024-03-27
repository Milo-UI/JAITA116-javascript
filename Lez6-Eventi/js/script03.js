let formRegistrazione = document.querySelector("#formRegistrazione");
let feed = document.querySelector("#feed");

let elNome = document.querySelector("#elNome");
let feedNome = document.querySelector("#feedNome");

let elCognome = document.querySelector("#elCognome");
let feedCognome = document.querySelector("#feedCognome");

let elEmail = document.querySelector("#elEmail");
let feedEmail = document.querySelector("#feedEmail");

let elAbbonamento = document.querySelector("#elAbbonamento");
let feedAbbonamento = document.querySelector("#feedAbbonamento");

//voglio un controllo solo al blur sui campi nome, cognome, email
let flagNome = true;
elNome.addEventListener("blur", function(){
    //this fa riferimento ad elNome
    if(this.value.length < 2){
        feedNome.innerHTML = "Stai inserendo un nome non valido";
        flagNome = false;
    }else{
        feedNome.innerHTML = "";
        flagNome = true;
    }
});

let flagCognome = true;
elCognome.addEventListener("blur", function(){
    //this fa riferimento ad elNome
    if(this.value.length < 2){
        feedCognome.innerHTML = "Stai inserendo un cognome non valido"
        flagCognome = false;
    }else{
        feedCognome.innerHTML = "";
        flagCognome = true;
    }
});


let flagEmail = true;
elEmail.addEventListener("blur", function(){
    const formatoEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!this.value.match(formatoEmail)){
        feedEmail.innerHTML = "Stai inserendo una mail non valida";
        flagEmail = false;
    }else{
        feedEmail.innerHTML = "";
        flagEmail = true
    }
});

elAbbonamento.addEventListener("change", function(){
    if(this.value == "premium"){
        feedAbbonamento.innerHTML = "<h4> + 100€ sul totale </h4>";
    }else if(this.value == "base"){
        feedAbbonamento.innerHTML = "<h4> + 50€ sul totale </h4>";
    }else{
        feedAbbonamento.innerHTML = "<h4> + 0€ sul totale </h4>";
    }
});


function validate(event){
    //questo primo if controlla nel caso in cui i campi non siano stati neppure toccati, quindi non è mai partito il blur
    if(elNome.value.trim() == "" || elCognome.value.trim() == "" || elEmail.value.trim() == "" || elAbbonamento.value == -1){
        feed.innerHTML = "<h4> Guarda che ti stai scordando qualcosa </h4>";
        event.preventDefault();
    }
    //Questo if controlla i flag
    else if (!flagNome || !flagCognome || !flagEmail ){
        feed.innerHTML = "<h4> C'è qualcosa compilato male </h4>";
        event.preventDefault();
    }
}


formRegistrazione.addEventListener("submit", validate);