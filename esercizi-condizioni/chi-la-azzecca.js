/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var player1 = 20;
var player2 = 60;
var numRandom = Math.floor(Math.random() * (100 - 1) + 1);

console.log('Numero casuale generato = ' + numRandom);

switch (numRandom) {
    case player1:
        console.log('Il giocatore 1 ha indovinato!');
        break;
    case player2:
        console.log('Il giocatore 2 ha indovinato!');
        break;
    default:
        //Math.abs restituisce il valore assoluto della differenza, sia esso positivo o negativo.
        if (Math.abs(numRandom - player1) < Math.abs(numRandom - player2)) {
            console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
        } else {
            console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!');
        }
}