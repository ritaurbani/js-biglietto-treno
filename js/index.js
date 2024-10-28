
// DATI


const userInput = prompt("Inserisci il numero di km da percorrere");  // Chiedere utente numero di km da percorrere - turn input into int
console.log(userInput, typeof userInput)


if (isNaN(userInput)) {                           //Controllo input km
    alert ( "Sono ammessi solo valori numerici")
} else {
const numberKm = parseInt(userInput);
console.log(numberKm, typeof numberKm)


const age = prompt("Inserisci la tua eta'");     // Chiedere utente eta' - turn input into int
console.log(age, typeof age)


if (isNaN(age)) {                                //Controllo input age
    alert("Sono ammessi solo valori numerici")
} else {
const userAge = parseInt(age);
console.log(userAge, typeof userAge);


const ticketPrice = numberKm * 0.21              // Definire prezzo biglietto: in base ai km(0.21 al km)
console.log(ticketPrice);


//ESECUZIONE LOGICA

    
let finalPrice;                                          // Dichiaro la variabile del prezzo finale

if ( userAge < 18) {

    const discountedPrice20 = ticketPrice / 100 * 20;    // Se l'eta'utente e'minore di 18, applica sconto 20% a prezzo biglietto - (prezzo biglietto / 100 * 20)
    finalPrice = ticketPrice - discountedPrice20;        //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
    
} else if (userAge > 65) {
    const discountedPrice40 = ticketPrice / 100 * 40;    // Se l'eta'utente e'maggiore di 65, applica sconto 40% a prezzo biglietto - (prezzo biglietto / 100 * 40)
    finalPrice = ticketPrice - discountedPrice40;        //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
    
} else {
    finalPrice = ticketPrice;
}

//OUTPUT

    console.log(finalPrice.toFixed(2));    // stampo in console.log il prezzo finale viaggio: (con 2 due decimali)

} }
