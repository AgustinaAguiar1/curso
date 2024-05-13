import * as rls from 'readline-sync';

let alturaPersona : number = rls.questionInt ("1.30");

if (alturaPersona>1.30) {
    
    console.log ('El numero es mayor a 1.30 m por lo que puede pasar a la montaña rusa');
    } else {
    
    console.log ('El numero es menor a 1.30 m por lo tanto no puede pasar');
    }