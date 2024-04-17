const biglietto = 0.21;
let km = prompt ("chilometri da percorrere");
console.log(km);
let age = prompt ("età passeggero");
console.log(age);
const prezzo = km * 0.21;
let sconto20 = prezzo - (biglietto - (0.20 * 100));
document.getElementById("standard").innerText= `il tuo biglietto costa: ${prezzo}`;
if (age < 18) {
    prezzo = prezzo - sconto20 ;
  } else if (age >= 65) {
    // istruzione
  } else {
    // prezzo normale
  }