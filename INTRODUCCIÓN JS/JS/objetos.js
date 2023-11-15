const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];
// console.log(personaArreglo[0]);

const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro', 'Rojo'],
    saludo: function(){
        alert('Hola');
    },
};

// console.log(persona.nombre);
// console.log(persona['edad']); //poner comillas para referise a propiedad y no variable

const variable = 'suscripciones';
// console.log(persona[variable]);
// console.log(persona.suscripciones.correo);

persona.pais = 'México';
persona.pais = 'España';

console.log(persona);
persona.saludo();