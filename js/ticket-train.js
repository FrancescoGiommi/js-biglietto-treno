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

//* calcolo prezzo biglietto (0.21 € al km)
const kmCost = 0.21;
console.log(kmCost);

const priceTicket = numberKm * kmCost;
console.log(priceTicket);

//** sconto del 20% per gli under 18
const under18Discount = 20;
const priceForUnder18 = priceTicket - under18Discount;

if (passengerAgeDiscount) { 
    /* se il passeggero ha meno di 18 anni */
    passengerAge < 18;
  alert("Hai meno di 18 anni quindi viene applicato uno sconto del 20%");
  
  else {

  }

}

//** sconto del 40% per gli over 65
const over65Discount = 40;
const priceForOver65 = priceTicket - over65Discount;
if (over65Discount) {
  alert("Per chi ha più di 65 anni viene applicato uno sconto del 40%");
}

// ! OUTPUT
