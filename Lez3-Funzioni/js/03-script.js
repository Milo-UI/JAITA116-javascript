let demo = document.getElementById("demo");

function salutaUtente(){
    let nomeUtente = prompt("Come ti chiami ? ");
    demo.innerHTML = "<h2> Ciao, " + nomeUtente + "</h2>";
}

