/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringa che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

var a = 5;
var b = 6;
var operazione = 'media';

switch (operazione) {
    case 'somma':
        console.log(operazione + ' = ' + (a + b));
        break;
    case 'sottrazione':
        console.log(operazione + ' = ' + (a - b));
        break;
    case 'moltiplicazione':
        console.log(operazione + ' = ' + (a * b));
        break;
    case 'divisione':
        console.log(operazione + ' = ' + (a / b));
        break;
    case 'modulo':
        console.log(operazione + ' = ' + (Math.floor(a) % Math.floor(b)));
        break;
    case 'potenza':
        console.log(operazione + ' = ' + (a ** b));
        break;
    case 'media':
        console.log(operazione + ' = ' + ((a + b) / 2));
        break;
    default:
        console.log('Operazione non valida');
}