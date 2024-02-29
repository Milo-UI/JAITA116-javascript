let num1 = 3; //Number
let num2 = "3"; //String

// l'operatore == valuta solo il contenuto di una variabile
let confronto1 = num1 == num2; //true
console.log("I due numeri sono uguali ? ", confronto1);

//l'operatore === valuta contenuto e TIPO
let confronto2 = num1 === num2; //false
console.log("I due numeri sono STRETTAMENTE uguali ? ", confronto2);

let num3 = 5;
let num4 = 5;

console.log("Sono uguali ? ", num3 == num4);
console.log("Sono strettamente uguali ?", num3 === num4);

// Il ! è il NOT
let confronto3 = num1 != num3; //true
console.log(confronto3);
let confronto4 = num1 !== num2; //true
console.log(confronto4);

// != vale quanto ==
let confronto6 = num1 != num2; //false
console.log(confronto6);

let confronto7 = num1 > num3; //false
console.log(confronto7);