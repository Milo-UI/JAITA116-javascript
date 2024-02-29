//IF STATEMENT
if (3 > 2) {
  //Ciò che si trova nel corpo dell' If viene eseguito se la condizione è true
  console.log("3 è maggiore di 2");
}

//////////////////////
let oraAttuale = 13;

if (oraAttuale <= 12) {
  console.log("Buongiorno: sono le ore " + oraAttuale);
} else {
  console.log("Buonsera: sono le ore " + oraAttuale);
}

///////////////
let punteggio = 17;

if(punteggio >= 18){
    console.log("Bravo, hai passato l'esame con: " + punteggio);
}else{
    console.log("Mi spiace, non hai passato l'esame");
}

//Operatore Ternario
//Condizione       viene eseguito quando la cond è TRUE        viene eseguito quando la cond è FALSE
(punteggio >= 18)? console.log("BRavo, hai superato l'esame"): console.log("Mi spiace, esame non superato");
