import * as readlineSync from 'readline-sync';

let LlegadaDeColectivo : string;

LlegadaDeColectivo = readlineSync.question ("Llego el colectivo? (S/N)");

while (LlegadaDeColectivo == "N") {
    console.log ("Todavia no llego");

    LlegadaDeColectivo = readlineSync.question ("Llego el colectivo? (S/N")
}

console.log ("Llego el colectivo");