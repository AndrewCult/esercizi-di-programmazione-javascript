/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var totPlayer1 = 0;
var totPlayer2 = 0;
var dado = 0;

for (N = 1; N <= 3; N++) {
    dado = Math.floor(Math.random() * 6 + 1);
    totPlayer1 = totPlayer1 + dado;
    console.log('Giocatore 1 al ' + N + ' tiro: ' + dado);
}
console.log('\n');

for (N = 1; N <= 3; N++) {
    dado = Math.floor(Math.random() * 6 + 1);
    totPlayer2 = totPlayer2 + dado;
    console.log('Giocatore 2 al ' + N + ' tiro: ' + dado);
}

console.log('\nIl giocatore 1 ha totalizzato ' + totPlayer1 + ' punti.');
console.log('Il giocatore 2 ha totalizzato ' + totPlayer2 + ' punti.\n');

if (totPlayer1 < totPlayer2) {
    console.log('Vince il giocatore 2!');
} else if (totPlayer1 > totPlayer2) {
    console.log('Vince il giocatore 1!');
} else {
    console.log('I due giocatori hanno totalizzato lo stesso punteggio.');
}