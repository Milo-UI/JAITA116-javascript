
let i = 0;

let msg = "";

while(i < 10){
    msg = "Ciao, siamo sempre sotto il valore 10 e adesso vale: " + i;
    console.log(msg);
    i++;
}

let colori = ["bianco", "verde", "blu"];
let y = 0;
while (y < colori.length){
    console.log(colori[y]);
    y++;
}


let f = 0;
let riga = "";

do{
 riga = f + " x 6 = " + (f * 6);
 console.log(riga);
 f++;
}while(f <= 10);

