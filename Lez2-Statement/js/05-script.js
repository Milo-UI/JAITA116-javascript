let msg = "";
let livello = 2;

switch (livello){

    case 1:
        msg = "Bravo, sei al primo livello !";
    break;
    
    case 2:
        msg = "Complimenti, hai superato il primo LVL vediamo come te la cavi col secondo !";
    break;

    case 3:
        msg = "Azz, questo è l'ultimo livello !"
    break;

    default:
        msg = "Benvenuto nel gioco"  
    break;
}

console.log(msg);