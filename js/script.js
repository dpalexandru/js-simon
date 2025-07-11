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

//Porto i numeri casuali in pagina html
const ul = document.querySelector('#numbers-list');

const li1 = document.createElement('li');
li1.textContent = numUno;
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = numDue;
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = numTre;
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.textContent = numQuattro;
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.textContent = numCinque;
ul.appendChild(li5);

//Parte un timer di 30 secondi 
const countdownEl = document.getElementById('countdown');
let tempo = 30;

//Funzione che si ripete ogni secondo togliendo 1 secondo da tempo
const timer = setInterval(() => {
    countdownEl.textContent = tempo;
    tempo--;
    if (tempo === 0) {
        clearInterval(timer);
        countdownEl.textContent = "Tempo scaduto!!!";
    }
}, 1000);

//Appare il campo input dopo 10 secondi
const form = document.getElementById('answers-form');

setTimeout(() => {
    ul.innerHTML = '';
    form.classList.remove('d-none');
}, 10000);

//Salvo i dati inseriti dall'utente in un array
const button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
    e.preventDefault();

    // creo array con i dati inseriti al click
    const inputs = form.querySelectorAll('input');
    const risposteUtente = [];

    for (let i = 0; i < inputs.length; i++) {
        const valore = parseInt(inputs[i].value);
        risposteUtente.push(valore);
    }
});