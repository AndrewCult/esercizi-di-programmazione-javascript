/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var v = 28;

if (v < 18) {
    v = 1;

} else if (v < 21) {
    v = 2;

} else if (v < 24) {
    v = 3;

} else if (v < 27) {
    v = 4;

} else if (v <= 29) {
    v = 5;

} else if (v > 30) {
    console.log('Superato il voto massimo!');
} else {
    v = 6;

}


switch (v) {
    case 1:
        console.log('Insufficiente');
        break;
    case 2:
        console.log('Sufficiente');
        break;
    case 3:
        console.log('Buono');
        break;
    case 4:
        console.log('Distinto');
        break;
    case 5:
        console.log('Ottimo');
        break;
    case 6:
        console.log('Eccellente!');
        break;
    default:
        console.log('Attenzione! Voto non valido!');
}