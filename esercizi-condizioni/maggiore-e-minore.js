/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a = 3;
var b = -1;
var c = 4;
var d = -2;
var max = a;
var min = a;
if (b > max) max = b;
if (c > max) max = c;
if (d > max) max = d;
if (b < min) min = b;
if (c < min) min = c;
if (d < min) min = d;
console.log('maggiore = ' + max + ', minore = ' + min);