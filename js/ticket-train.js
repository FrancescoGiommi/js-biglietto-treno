// # TRACCIA

//* Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

//* e sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

//* - il prezzo del biglietto è definito in base ai km (0.21 € al km)

//* - va applicato uno sconto del 20% per i minorenni

//* - va applicato uno sconto del 40% per gli over 65.

//* - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

// # PROCEDURA

// ! RACCOLTA DATI

//* chiedo all'utente il numero di chlometri che vuole percorrrere e lo trasformo in numero
const numberKm = parseInt(
  prompt("Inserisci il numero di chilometri che devi percorrere")
);
console.log(numberKm);

const kmCost = 0.21;
console.log(kmCost);

//* controllo che sia valido
const isNumberKmValid = !isNaN(numberKm) && numberKm > 0;

if (!isNumberKmValid) {
  alert("Il valore inserito non è valido");
}

//* chiedo l'eta del passeggero
const passengerAge = parseInt(prompt("Inserisci l'eta del passeggero"));
console.log(passengerAge);

//* controllo che sia valido
const isPassengerAgeValid = !isNaN(passengerAge) && passengerAge > 0;

if (!isPassengerAgeValid) {
  alert("Il valore inserito non è valido");
}

// ! ELABORAZIONE

//* calcolo prezzo biglietto (0.21 € al km)
const priceTicket = numberKm * kmCost;
console.log(priceTicket);

//* sconto del 20% da applicare per gli under 18
if (passengerAge < 18) {
  const discountForUnder18 = 20;
  const priceUnder18 = priceTicket - discountForUnder18;
  console.log(priceUnder18.toFixed(2));
  alert("Hai meno di 18 anni quindi il biglietto è scontato del 20%");
}

//* sconto del 40% da applicare per gli over 65
if (passengerAge > 65) {
  const discountForOver65 = 40;
  const priceOver65 = priceTicket - discountForOver65;
  console.log(priceOver65.toFixed(2));
  alert("Hai più di 65 anni quindi il biglietto è scontato del 40%");
}

// ! OUTPUT
