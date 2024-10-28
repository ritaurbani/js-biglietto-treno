//TRACCIA COMPITO

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.


// DATI

Chiedere utente numero di km da percorrere - turn input into int 
Chiedere utente eta' - turn input into int

prezzo biglietto: in base ai km (0.21 al km)

applicare sconto del 20% (per i minorenni eta'< 18)
applciare sconto 40% (per i minorenni: eta'> 65)

prezzo totale viaggio : prezzo biglietto - sconto


//ESECUZIONE LOGICA

Calcolo il prezzo biglietto in base a input km (0.21 * km)

Dichiaro la variabile del risultato

Se l'eta'utente e'minore di 18, risultato e': prezzo biglietto - (prezzo biglietto /100 *20)
Se l'eta'utente e'maggiore di 65, risultato e': prezzo biglietto - (prezzo biglietto /100 *40)


//OUTPUT

stampo in console.log il risultato/prezzo finale viaggio: (con 2 due decimali)
