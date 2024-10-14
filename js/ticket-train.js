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

// ! OUTPUT
