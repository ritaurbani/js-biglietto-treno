
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

// Definire prezzo biglietto: in base ai km(0.21 al km)

const ticketPrice = numberKm * 0.21
console.log(ticketPrice);


//ESECUZIONE LOGICA

    // Dichiaro la variabile del prezzo finale
let finalPrice;

    // Se l'eta'utente e'minore di 18, applica sconto 20% a prezzo biglietto - (prezzo biglietto / 100 * 20)
    //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
if ( userAge < 18) {
    const discountedPrice20 = ticketPrice /100 *20;
    finalPrice = ticketPrice - discountedPrice20;
}
    // Se l'eta'utente e'maggiore di 65, applica sconto 40% a prezzo biglietto - (prezzo biglietto / 100 * 40)
    //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
else if (userAge > 65) {
    const discountedPrice40 = ticketPrice / 100 * 40;
    finalPrice = ticketPrice - discountedPrice40;
}
else {
    finalPrice = ticketPrice;
}

//OUTPUT

console.log(finalPrice.toFixed(2));

