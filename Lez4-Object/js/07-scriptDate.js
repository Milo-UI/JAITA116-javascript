let dataOdierna = new Date();

console.log(dataOdierna);

let giorno = dataOdierna.getUTCDate();
let mese = dataOdierna.getUTCMonth();
let anno = dataOdierna.getFullYear();

console.log(giorno, mese +1 , anno);
console.log(dataOdierna.getUTCDate());

moment();

moment().locale("");

console.log(moment().format('DD/MM/YY'));
console.log(moment().calendar());
