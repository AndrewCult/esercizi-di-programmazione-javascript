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
/*trasformo la variabile numero in una variabile stringa, dopo aver verificato che la proprietà length 
non funziona con i numeri*/
num = numero.toString();

if (num.length == 1) {
    console.log(num.length + ' cifra');
} else {
    if (num.length <= 4) {
        console.log(num.length + ' cifre');
    } else {
        console.log('il numero inserito è superiore a 9999');
    }
}

//sì, ho deciso di provare con entrambi i metodi

switch (num.length) {
    case 1:
        console.log(num.length + ' cifra');
        break;
    case 2:
    case 3:
    case 4:
        console.log(num.length + ' cifre');
        break;
    default:
        console.log('il numero inserito è superiore a 9999');
}