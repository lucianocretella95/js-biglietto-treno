const biglietto = 0.21;
let km = prompt ("chilometri da percorrere");
console.log(km);
let age = prompt ("età passeggero");
console.log(age);
let prezzo = km * 0.21;
let sconto20 = (0.21 * 20) / 100;
let sconto40 = (0.21 * 40) / 100;
if (age < 18) {
    prezzo = prezzo - sconto20;
  } else if (age >= 65) {
    prezzo = prezzo - sconto40;
  } else {
    alert("nessuno sconto");
  }
document.getElementById("standard").innerText= `il tuo biglietto costa: ${prezzo}`;
