/* 📌 .length
    (propiedad) - Nos permite conocer la cantidad de elementos dentro de un arreglo.
*/

const colores = ["rojo", "verde", "azul"];

console.log(colores.length);

/* 📌 .toString() (metodo va entre parentesis)
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString();

/* 📌 .join()
    Nos permite transformar un arreglo a una cadena de texto y serparar cada elemento.
*/

console.log(colores.join("- -")); // mostraría rojo- -verde- -azul

/* 📌 .sort()
    Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ["c", "b", "d", "a"];
console.log(letras.sort()); // aparece en orden [a, b, c, d]

const numero = [1, 3, 4, 2, 5]; // aparece en order [1, 2, 3, 4, 5]
console.log(numero.sort());

/* 📌 .reverse()
    Nos permite ordenar un arreglo de forma descendente.
*/

console.log(letras.reverse()); // aparece [d, c, b, a]
console.log(numero.reverse()); // aparece [5, 4, 3, 2, 1]

/* 📌 .concat()
    Nos permite juntar dos arreglos en uno solo.
*/
const arreglo1 = [1, 2, 3];
const arreglos2 = ["a", "b", "c"];
const arreglo3 = arreglo1.concat(arreglos2);

console.log(arreglo3); // aparece [1, 2, 3, a, b, c, d]

/* 📌 .push()
    Nos permite agregar un elemento al final de un arreglo.
*/
colores.push("negro");
console.log(colores); // aparece [rojo, verde, azul, negro]

/* 📌 .pop()
    Nos permite eliminar el último elemento de un arreglo
*/
colores.pop();
console.log(colores); // aparece [rojo, verde, azul] elimina el color negro

/* 📌 .shift()
    Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
const diaEliminado = dias.shift();
console.log(diaEliminado); // aparece el día eliminado
console.log(dias[0]); // me muetra el siguiente dia despues del eliminado este caso 'Martes'

/* 📌 .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift("lunes");
console.log(dias); // aparece de nuevo lunes al agregarlo al principio de nuevo

/* 📌 .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1er parametro - Posición donde queremos comenzar a insertar los elementos.
    - 2do parametro - Si queremos eleminar elementos del arreglo desde la posición indicada.
    - Resto de parametros - Los elementos a insertar.
*/
const misAmigos = ["Alejandro", "Cesar", "Manuel"];
misAmigos.splice(1, 2, "Jesus", "Erika"); // 0, 0, no elimina y los añade al inicio.
console.log(misAmigos); // Elimina cesar y manuel, y añade jesus y erika en su lugar.

/* 📌 .slice()
    Nos permite copiar una parte de un arreglo a otro.
    - 1er parametro - Posición donde queremos copiar.
    - 2do parametro - Hasta antes de que elemento a copiar.
*/

const frutas = ["fresas", "kiwi", "melon", "sandia", "moras"];
const frutasFavoritas = frutas.slice(1, 4);
console.log(frutasFavoritas); // muestra desde kiwi hasta sandia, muestra los arreglos numero [1, 2, 3]
