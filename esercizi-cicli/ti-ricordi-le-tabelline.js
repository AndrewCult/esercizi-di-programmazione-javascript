/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var x = 8;
var output = '';

for (i = 0; i <= 10; i++) {
    let result = x * i;
    output += result.toString() + ' ';
}

console.log(output);