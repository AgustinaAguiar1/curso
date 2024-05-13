import * as readlineSync from 'readline-sync';

let Usuario = readlineSync.question ("Ingrese el usuario");

if (Usuario='Juan') {

    console.log ('El usuario es correcto');
}

let Contraseña = readlineSync.question ("Ingrese la contraseña");

 if (Contraseña='ClaveJuan') {

    console.log ('La contraseña es correcta');
 }