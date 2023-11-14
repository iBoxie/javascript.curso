/*
    📌  .length - Devuelve el número de caracteres de una cadena de texto. 
        Es una propiedad por eso no lleva paréntesis.
*/

const texto = "Hola yo soy Andrés";
console.log(texto.length);

/*
    📌  .indefOf() .lastIndexOf() - Devuelve el index del primer/ultimo caracter especificado.
*/

const texto1 = "Hola soy Andrés";
const primerChart = texto1.indexOf("o"); // Aparece en posicion 1
const ultimoChart = texto1.lastIndexOf("o"); // Aparece en posicion 7

console.log(primerChart);
console.log(ultimoChart);

/*
    📌  .slice() - Devuelve un fragmento de una cadena de texto
        - Primer parametro: index desed donde queremos cortar
        - Segundo parametro (opcional): index hasta donde queremos cortar
*/

const texto2 = "Hola yo soy Andrés!";
// Estas variables extraerían la posición sin tener que ir contando manualmente.
const index = texto2.indexOf("y"); // Agarra la posición de la primera 'y'.
const lastIndex = texto2.lastIndexOf("!");// Agarra la posición hasta antes del '!'
console.log(texto2.slice(index, lastIndex)); // Aparece 'yo soy Andres'
// También podríamos haber puesto:
console.log(texto2.slice(5, 18)); // Aparecería lo mismo solo que contando manualmente la posición.
// Para cortar desde donde tu quieras hasta el final solo haría falta poner un primer valor en slice()
// Aquí sería solo slice(5) y aparecería 'yo soy Andrés!'.

// Podríamos contar con números negativos, porque se contaria de D => I
console.log(texto2.slice(-14, -1)) // Aparece "yo soy Andrés"

/*
    📌  .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
        - 1er parametro: el texto que queremos reemplazar.
        - 2nd paramentro: el texto que queremos poner.
*/

const texto3 = 'Hola yo soy Andrés'
const texto4 = 'Hola yo soy Marcel'
const reemplazo = texto3.replace(texto3, texto4) // Aparece "Hola yo soy Marcel", cambio el texto entero.
const reemplazo1 = texto3.replace('Andrés'/*Busca la palabra*/, 'Jesús'/*Cambia la palabra buscada por esta*/) // Aparece "Hola yo soy Jesús", cambió solo la palabra.
console.log(reemplazo)
console.log(reemplazo1)