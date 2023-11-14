/* 📌 .indexOf()

    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1.

*/

const nombres = ["Andres", "Julio", "Marta", "Erika", "Jesus", "Clara", 'Andres'];

console.log(nombres.indexOf('Andres')); // aparece posición 0

/*📌 .lastIndexOf()

    Obtenemos el último index de un elemento.

*/ 

console.log(nombres.lastIndexOf('Andres')) // aparece posición 6

/*📌 .forEach()

    Nos permite ejecutar una funcion por cada elemento.

*/ 

nombres.forEach((nombre, i,)=> { // Para guardar cada elemento del arreglo hemos puesto nombre, segundo parametro es para el index.
    console.log(`Hola ${nombre} ${i} `) // Aparece Hola seguido del nombre correspondiente al arreglo en lista con su numero de index.

});

/*📌 .find()

    Nos permite reccorer un arreglo y devuelve el PRIMER elemento que retornemos.

*/ 

const resultado = nombres.find((nombre)=>{
    // console.log(nombre[0]); // Para acceder al nombre y que lo tome como un arreglo y obtenga la primera letra.

    if(nombre[0] === 'E') // Pregunta si el indice 0 del nombre es igual a E, retorne el nombre.
    return nombre; // Buscará que nombre empieza por la letra E y retorna el valor.

});

console.log(resultado) // Aparece Erika


/*📌 .map()

    Nos permite ejecutar una funión por cada elemento y crear un nuevo arreglo
    en base a los resultados de esa función. Y devuelve todos los arreglos.

*/  

// const nombreMayusculas = nombres.map((nombre)=>{
//     return nombre.toUpperCase(); // Ejecuta el MAYUS a cada elemento y crea un nuevo arreglo basado en esa función.

// });

// Otra manera de hacer lo mismo sería y mas compacto al usar función tipo flecha.

const nombresMayusculas = nombres.map((nombre)=> nombre.toUpperCase());

console.log(nombresMayusculas) // Aparece el arreglo con todos los nombres en MAYUSCULAS.

/*📌 .filter()

    Nos permite ejecutar una función por cada elemento
    y luego crear un arreglo en base a los resultados de esa función.
    Devuelve todos los arreglos que cumplan una condición.

*/ 

const nombres5Letras = nombres.filter((nombre)=> {
    if (nombre.length === 5) // Si el nombre tiene una longuitud de 5 letras, entonce filtra a través de esa condición.
    return nombre; // Devuelve los nombres que cumplan con las 5 letras.
})

console.log(nombres5Letras);

// Si hacemos lo mismo con .map() devolvera todos los elementos pero undefined los que no cumplan la condición.

/*📌 .includes()

    Nos permite saber si el arreglo contiene un elemento especificado.

*/ 

console.log(nombres.includes('Julio')) // aparece como true porque sí está el arreglo

/*📌 .every()

    Nos permite ejecutar un condición sobre cada elemento y nos devuelve true si TODOS los elementos
    cumplieron con la condición.

*/ 

const nombreTipoString = nombres.every((nombre)=>{
    if( typeof nombre === 'string') // Operador especial 'typeof' que permite conocer el tipo del valor.
    return true;
    else {
        return false;
    }
})

console.log(nombreTipoString) // Aparece true porque todos los valores son de tipo STRING.

// Puede servir para formularios, para validar que los campos tengan un valor válido.

/*📌 .some()

    Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algún elemento
    cumplio la condición.

*/ 

const nombreNoString = nombres.some((nombre)=>{
    if( typeof nombre !== 'string')
    return true;
    else {
        return false;
    }
})

console.log(nombreNoString) // Como no hay ninguno que no sea STRING, nos devuelve False.
                            // Si hubiera alguno que no sea STRING, devolvería True.