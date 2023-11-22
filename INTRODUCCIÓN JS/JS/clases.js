/*
    📌  Estrucctura de una clase:
    -   Definición.
    -   Propiedades: la clase puede contener variables. Dentro de una clase se llama propiedades.
    -   Constructor: Es un método especial para inicializar un objeto creado a partir de una clase.
    - Métodos: La clase puede contener funciones. Dentro de una clase se llama métodos.
*/

class Usuario {/* Propiedades */
    tipo = 'usuario';
    /* Constructor */
    constructor(nombre, apellido){
        /*this sirve para hacer referencia a esta Clase misma donde está*/
        this.nombre = nombre;
        this.apellido = apellido;
        console.log('Nuevo usuario registrado!')
    }
    /* Métodos */
    obtenerNombreCompleto(){
        console.log('Obteniendo datos...')
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario = new Usuario('Carlos Arturo', 'Esparza');
console.log(usuario.obtenerNombreCompleto())

const usuario2 = new Usuario('Andrés', 'Armijos');
console.log(usuario2.obtenerNombreCompleto())

