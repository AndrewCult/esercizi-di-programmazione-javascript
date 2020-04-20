/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var numero = 245;
num = String(numero);
if (num.length == 1) {
    console.log(num.length + ' cifra');
} else {
    if (num.length <= 4) {
        console.log(num.length + ' cifre');
    } else {
        console.log('il numero inserito è superiore a 9999');
    }
}