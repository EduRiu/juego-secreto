/*
Desafíos:
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y 
devuelva el resultado de multiplicar ese número por sí mismo.
*/

let numero = generarNumeros();
let numero1 = generarNumeros();
let numero2 = generarNumeros();
let numero3 = generarNumeros();
console.log(`numero: ${numero}, numero1: ${numero1}, numero2: ${numero2}, numero3: ${numero3} `)
let nombre = 'Eduardo'

function generarNumeros(){
    return Math.floor(Math.random()*10)+1;
}

function saludo(){
    console.log('Hola mundo!');
}

function saludoPersonalizado(nombre){
    console.log(`Hola ${nombre}`);
}

function dobleNumero(numero){
    console.log(`Hola ${numero*2}`);
}

function promedioTresNumeros(numero1, numero2, numero3){
    console.log(`Hola ${(numero1 + numero2 + numero3)/3}`);
}

function numeroMayor(numero1, numero2){
    if(numero1 > numero2){
        console.log(`el mayor es ${numero1}`)
    }else if(numero1 < numero2){
        console.log(`el mayor es ${numero2}`)
    }else{
        console.log(`los numeros son iguales`)
    }
}

function longNumero(numero3){
    console.log(`el doble de si mismo es ${numero3*numero3}`)
}

saludo();
saludoPersonalizado(nombre);
dobleNumero(numero);
promedioTresNumeros(numero1,numero2,numero3);
numeroMayor(numero1,numero2);
longNumero(numero3);