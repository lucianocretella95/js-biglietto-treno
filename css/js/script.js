const biglietto = 0.21;
let km = prompt ("chilometri da percorrere");
console.log(km);
let age = prompt ("età passeggero");
console.log(age);
const prezzo = km * 0.21; 
document.getElementById("standard").innerText= `il tuo biglietto costa: ${prezzo}`;