
// DATI

// Chiedere utente numero di km da percorrere - turn input into int 

const userInput = prompt("Inserisci il numero di km da percorrere");
console.log(userInput, typeof userInput)
const numberKm = parseInt(userInput);
console.log(numberKm, typeof numberKm)

// Chiedere utente eta' - turn input into int

const age = prompt("Inserisci la tua eta'");
console.log(age, typeof age)
const userAge = parseInt(age);
console.log(userAge, typeof userAge);

// prezzo biglietto: in base ai km(0.21 al km)

const ticketPrice = numberKm * 0.21
console.log(ticketPrice);










//OUTPUT
//console.log(result.tofixed())