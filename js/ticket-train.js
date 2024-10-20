// # TRACCIA

//* Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

//* e sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

//* - il prezzo del biglietto è definito in base ai km (0.21 € al km)

//* - va applicato uno sconto del 20% per i minorenni

//* - va applicato uno sconto del 40% per gli over 65.

//* - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

// ! RACCOLTA DATI

//* chiedo all'utente il numero di chlometri che vuole percorrrere e lo trasformo in numero
let numberKm = parseInt(
  prompt("Inserisci il numero di chilometri che devi percorrere")
);
console.log(`Km da percorrere ${numberKm}`);

//* prezzo €/Km
const kmCost = 0.21;
console.log(`Il prezzo al Km è € ${kmCost}`);

//* chiedo l'eta del passeggero
const passengerAge = parseInt(prompt("Inserisci l'eta del passeggero"));
console.log(`L'eta del passeggero è ${passengerAge} anni`);

//* controllo che sia valido
const isNumberKmValid = !isNaN(numberKm) && numberKm > 0;

//* controllo che sia valido
const isPassengerAgeValid = !isNaN(passengerAge) && passengerAge > 0;

// # PROCEDURA
// ! ELABORAZIONE
if (isNumberKmValid && isPassengerAgeValid) {
  //* calcolo prezzo biglietto (0.21 € al km)
  const priceTicket = numberKm * kmCost;
  console.log(`Il prezzo del biglietto è € ${priceTicket.toFixed(2)}`);

  //* sconto del 20% da applicare per gli under 18
  if (passengerAge < 18) {
    const discountForUnder18 = 20;
    const priceUnder18 = (priceTicket - discountForUnder18) % 100;
    alert("Hai meno di 18 anni quindi viene applicato uno sconto del 20%");
    console.log(`Il prezzo finale è di € ${priceUnder18.toFixed(2)}`);
  }

  //* sconto del 40% da applicare per gli over 65
  if (passengerAge > 65) {
    const discountForOver65 = 40;
    const priceOver65 = (priceTicket - discountForOver65) % 100;
    alert("Hai più di 65 anni quindi viene applicato uno sconto del 40%");
    console.log(`Il prezzo finale è di € ${priceOver65.toFixed(2)}`);
  }
} else {
  alert(`ERRORE :
    I Km inseriti non sono validi.
    L'età inserita non è valida.
    `);
}

// ! OUTPUT

console.log(`
numberKm: ${numberKm}
kmCost: ${kmCost}
passengerAge: ${passengerAge}
`);
