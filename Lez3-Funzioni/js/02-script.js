function calcolaArea(altezza, larghezza){
    let area = altezza * larghezza;
    // console.log("L'area vale: " + area);

    //la funzione può anche restituirmi un valore
    return area;
}

//quando richiamo una funzione con parametri, glieli devo passare
//salvo nella variabile area il valore che mi viene restituito dalla funzione
let superficie = calcolaArea(5,9);
console.log(superficie);

console.log("Il valore dell'area é: " + calcolaArea(9,3));


function calcolaVolume(altezza, larghezza, profondita){
    // let volume = altezza * larghezza * profondita;
    if(altezza != null && larghezza != null && profondita != null){
        //posso usare una funzione dentro l'altra
        let area = calcolaArea(altezza, larghezza);
        let volume = area * profondita;
        return volume;

    }else{
        return "Stai mancando un dato";
    }

}

console.log("IL volume vale: " + calcolaVolume(5,8,9));

function calcolaVolume2(area, profondita){
    let volume = area * profondita;
    return volume;
}

//nel passare una funzione come parametro di un'altra funzione sto facendo una CALLBACK FUNCTION
console.log("Il volume2 vale: " + calcolaVolume2(calcolaArea(7,5), 5));


//CLOSURE: definire una funzione dentro l'altra per poter accedere a variabili locali più esterne
function leggiNome(){

    let nome = "Dario";

    function leggiCognome(){
        cognome = "Mennillo";
        return nome + " " + cognome;
    }

    // console.log(cognome); non posso accedere a cognome
    return leggiCognome();
}

console.log(leggiNome());
