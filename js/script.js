// Visualizzo in pagina 5 numeri casuali da uno a 30. 
//Creo una funzione che genera un numero casuale da 1 a 30
const numeroCasuale = () => {
    let casual = Math.floor(Math.random() * 30) + 1;
    return casual;
}

//Creo 5 numeri casuali a ogni aggiornamento della pagina.
const numUno = numeroCasuale();
const numDue = numeroCasuale();
const numTre = numeroCasuale();
const numQuattro = numeroCasuale();
const numCinque = numeroCasuale();

console.log(numUno, numDue, numTre, numQuattro, numCinque)