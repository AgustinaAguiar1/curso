import * as readlineSync from 'readline-sync';

let PosicionLlegada : number = readlineSync.questionInt('ingrese la posicion de llegada del competidor');

switch (PosicionLlegada) {
    case 1:
        console.log ('entregar medalla oro');
        break
        case 2: 
        console.log ('entregar medalla plata');
        break
        case 3:
            console.log ('entregar medalla bronce');
            break
            default:
                console.log ('entregar medalla de participacion');
}