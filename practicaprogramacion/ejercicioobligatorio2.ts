import * as readlinesync from 'readline-sync';

let base : number = readlinesync.questionInt ("Ingrese el numero de la base");
let exponente : number = readlinesync.questionInt ('Ingrese el numero del exponente');
let i : number;

for (i= 0; i <= exponente; i++) {
    let potencia : number =calcularPotencia (base, i);

    console.log ( 'El resultado es: ' + potencia);
}


function calcularPotencia (base: number, exponente: number): number {
      return base**exponente;
  
}