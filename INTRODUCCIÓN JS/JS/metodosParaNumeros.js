/*
    📌 .toString()

*/
const numero = 10;
console.log(numero, typeof numero);
const texto = numero.toString();
console.log(texto, typeof texto);

/*
    📌 .toFixed()
    Permite obtener un numero con la cantidad de decimales especificados
*/

const numero1 = 3.1415;
console.log(numero1.toFixed(2));

/*
    📌 parseInt()
    Intena transformar un valor a uno entero.
*/

// const numero2 = parseInt(prompt("Escribe un número"));
// const numero3 = parseInt(prompt("Escribe un número"));

// console.log(numero2 + numero3);

/*
    📌 parseFloat()
    Intenta transformar un valor a uno con decimales
*/

// const numero4 = parseFloat(prompt("Escribe un número"));
// const numero5 = parseFloat(prompt("Escribe un número"));

// console.log(numero4 + numero5);

/*
    📌 Math.random()
    Genera un número al azar entre 0 y 1
*/ 

const numero6 = Math.random();
console.log(numero6)

/*
    📌 Math.floor()
    Redondea haia abajo un número
*/ 

console.log(Math.floor(10.90))

/*
    📌 Math.ceil()
    Redondea hacia arriba un número
*/ 

console.log(Math.ceil(10.10))

/*
    📌 Math.round()
    Redondea hacia el entero más cercano
*/ 

console.log(Math.round(10.99))
console.log(Math.round(13.49))

/*
    📌 Ejemplo de numero al azar de 0 a 100
*/ 

const numero7 = Math.round(Math.random()*100);
console.log(numero7)