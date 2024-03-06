let punteggio1 = 35;
let skill1 = 17;

//Il gioco mi dice che: passo il livello se il punteggio è maggiore di 50 e le skill maggiori di 20
// AND LOGICO                      T                   T ----> T
let passaggioLivello = (punteggio1 >= 50) && (skill1 >= 20);

console.log(passaggioLivello);

if(punteggio1 >= 50 && skill1 >= 20){
    console.log("Bravo, hai superato il livello");
}else{
    console.log("Mi spiace, devi migliorare qualcosa");
}

//Easy Mode: per poter avanzare di livello mi basta avere anche solo uno dei due sopra la soglia
if(punteggio1 >= 50 || skill1 >= 20){
    console.log("Bravo, hai superato il livello in EasyMode");
}else{
    console.log("Mi spiace, anche con la EasyMode ti sei dimostrato un newbie");
}




///Torno al giochino dell'ora 

// let oraEsatta = new Date();
// console.log(oraEsatta);
// let oraAttuale = oraEsatta.getHours();

let oraAttuale = 20;

if(oraAttuale <= 12){
    console.log("Buongiorno, sono le ore: " + oraAttuale);
}else if(oraAttuale > 12 && oraAttuale <= 18){  //  12 < oraAttuale < 18 NON si può scrivere 
    console.log("Buon pomeriggio, sono le ore: " + oraAttuale);
}else if(oraAttuale > 18 && oraAttuale <= 21 ){
    console.log("Buonasera, sono le ore: " + oraAttuale);
}else if( oraAttuale > 21 && oraAttuale <= 24) {
    console.log("Buonanotte, sono le ore: " + oraAttuale);
}else{
    console.log("Mi stai fornendo un'ora non valida");
}
