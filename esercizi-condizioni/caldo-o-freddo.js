/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;
max = Math.max(a, b, c, d, e, f, g);
min = Math.min(a, b, c, d, e, f, g);
console.log('giornata più calda = ' + max + ', giornata più fredda = ' + min);