import * as readlineSync from 'readline-sync';

const claveReal: string = "Eureka";
let claveUsuario: string = readlineSync.question ('Ingrese su clave: ');
let contador: number = 0;
let intentos: number= 1;

while ((contador <= intentos) && (claveUsuario != claveReal)) {
    claveUsuario = readlineSync.question ('Ingrese su clave');
    contador++;
}

if (claveReal != claveUsuario) {
    console.log ('te quedaste sin intentos');
} else {
    console.log ('contraseña correcta');
}