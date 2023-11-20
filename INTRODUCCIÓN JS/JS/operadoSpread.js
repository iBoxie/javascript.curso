/*
    📌 Operador Spread "..."
    Permite tomar los elementos de una arreglo u objeto y expandirlos en otro sitio.
*/

// const frutas = ["manzana", "kiwi", "platano", "mango", "naranja", "fresas"];
// const comidaFavorita = ["pizza", "hamburguesa", "sushi", ...frutas];
// console.log(comidaFavorita);

// const datosLogin = {
//     nombre: 'Carlos',
//     correo: 'ejemplo@ejemplo.com',
//     password: '123',
// }

// const usuario = {
//     // ...datosLogin // Aquí no sobreescribiría los valores actuales
//     nombre: 'Andres',
//     edad: '29',
//     ...datosLogin // Aquí sobrescribe los valores actuales
// }

// console.log(usuario);

/*
    📌 Parametro Resto
    Permite que una función contenga un número indefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo.
*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  console.log(nombre, correo, datosAdicionales);
};
registrarUsuario("Carlos", "ejemplo@ejemplo.com");
registrarUsuario("Alejandro", "ejemplo@ejemplo.com", 28, "España");

/*
    📌 Destructuración de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlas en una variable.
*/

const amigos = ["Alejandro", "Jesus", "Raul", "Andres", "Antonio"];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(segundoAmigo);

const persona = {
  nombre: "Andres",
  edad: 29,
  pais: "España",
};

// const { nombre, pais, edad } = persona;
// console.log(nombre, pais);

const mostrarEdad = ({nombre, edad})=>{
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarEdad(persona)