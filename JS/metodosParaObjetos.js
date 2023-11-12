const usuario = {
    nombre: 'Andres',
    edad: 29,
    amigos:['Jesus', 'Roberto', 'Antonio'],
    saludo: ()=>{
        console.log('Hola!')
    }
}
 
/*📌 Métodos propios
    Los objetos pueden tener métodos personalizados.
*/
usuario.saludo();

/*📌 Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
// Si no guardamos la función en una variable no nos mostraría el valor devuelto.
const usuarioKeys = Object.keys(usuario);
console.log(usuarioKeys) // Aparece [nombre, edad, amigos, saludo] pero no sus valores.

/*📌 Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto.
*/
const usuarioValues = Object.values(usuario);
console.log(usuarioValues); // Aparece [Andres, 29, Array, f] de esta manera sí aparecen los valores.

/*📌 Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const usuarioEntries = Object.entries(usuario);
console.log(usuarioEntries); // Aparece un arreglo, con más arreglos, cada uno con su nombre y valor. [Array(2), Array(2), Array(2), Array(2)]

console.log(`El objeto tiene ${usuarioEntries.length} propiedades`)
//.length nos permite extraer la longuitud, si no aparecería
// El objeto tiene nombre:Andres, edad:29, etc. propiedades.
// En vez de El objeto tiene 4 propiedades, como ahora si nos muestra.