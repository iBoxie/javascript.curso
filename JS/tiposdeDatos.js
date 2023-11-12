//📌 STRING
const nombre = 'Carlos';
const parrafo = "Este es un 'parrafo'";
const parrafo2 = 'Este es un "parrafo"';
const parrafo3 = 'Este es un \' parrafo \'';

//📌 NUMEROS
const numero = 4;
const numero2 = -4.32;

//📌 BOOLEAN
const usuarioConectado = true;
const mayorQue = 10 > 2;

//📌 ARRAYS
const arreglo = ['texto', 456, true, {propiedad: 'valor'}, [1, 2, 3]];


//📌 OBJECT
const persona = {
    //propiedad: valor
    nombre: 'Carlos', //no lleva ";"
    edad: 27,
    coche: {
        marca: 'Opel',
        color: 'negro',
    },
};

//📌 FUNCTION
function hola() {
    console.log('Hola')
}

hola();

//📌 NULL & UNDEFINED

const mivariable = null; //Especificar que el valor es nulo
const mivariable2 = undefined; //Especificar que el valor no esta definido