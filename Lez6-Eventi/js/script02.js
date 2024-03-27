let mioForm = document.querySelector("#mioForm");

let elNome = document.querySelector("#elNome");
let elCognome = document.querySelector("#elCognome");
let elEmail = document.querySelector("#elEmail");

let feed = document.querySelector("#feed");
let demo = document.querySelector("#demo");

//l'evento submit è tipicamente utilizzato per controllare i form. Il metodo preventDefault evita che il form venga lanciato senza i dovuti controlli 
mioForm.addEventListener("submit", function(event){
    if(elNome.value == "" || elCognome.value == "" || elEmail.value == ""){
        //impedisce che il form venga lanciato.
        event.preventDefault();
        event.stopPropagation();
        feed.innerHTML = "<p>Stai dimenticando qualcosa</p>"
    }else{
        console.log("Dati correttamente inviati");
    }
});

//Eventi focus e blur tipicamente utilizzati sui campi input
//Focus avviene quando clicco in un campo. Blur avviene nel momento in cui clicco fuori dal campo, ovviamente dopo averci cliccato dentro, quindi quando perdo il fuoco sul campo

elNome.addEventListener("focus", function(){
    feed.innerHTML = "Il nome deve essere di almeno 3 caratteri";
});

elNome.addEventListener("blur", function(){
    if(elNome.value.length < 3){
        feed.innerHTML = "Stai inserendo un nome troppo corto !!";
    }else{
        feed.innerHTML = "";    
    }
});

