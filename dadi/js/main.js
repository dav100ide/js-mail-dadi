// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// genero un numero per il pc e per l'user

const cpuNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById('cpu-number-box').innerHTML = `computer: ${cpuNumber}`;
document.getElementById('user-number-box').innerHTML = `tu: ${userNumber}`;

const btnResult = document.getElementById('btn-result');
btnResult.addEventListener('click', function () {
   let result = document.getElementById('result');
   if (cpuNumber > userNumber) {
      result.innerHTML = 'ha vinto il computer';
   } else if (userNumber > cpuNumber) {
      result.innerHTML = 'hai vinto tu!';
   } else {
      result.innerHTML = 'pareggio, i numeri sono uguali';
   }
});
console.log(result);
