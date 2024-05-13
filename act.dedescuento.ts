import * as readlyneSync from 'readline-sync';

let precioProducto = readlyneSync.questionInt("Ingrese el precio del producto");

let precioDescuento: number = precioProducto*0.1;

let precioFinal:number = precioProducto - precioDescuento;

console.log ("El precio final de su producto es: "+ precioFinal);
