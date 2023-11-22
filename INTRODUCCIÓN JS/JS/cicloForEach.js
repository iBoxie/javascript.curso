/*
    📌  Ciclo forEach
        Es un método de los arreglos que podemos usar para recorrer los elementos.
*/

const amigos = ["Alejandro", "Cesar", "Manuel"];

amigos.forEach((amigo, index) => {
  console.log(`El amigo número ${index} es ${amigo}`);
});

/*
    📌  Ciclo for in
       Nos permite recorrer las propiedades de un objeto.
*/

const persona = {
  nombre: "Andres",
  edad: 29,
  correo: "ejemplo@ejemplo.com",
};

for (propiedad in persona) {
  // console.log(persona[propiedad]) // persona me da todos los datos, propiedad me da el nombre de las propiedades, persona[propiedad] me da los valores de cada propiedad.
  persona[propiedad] = "";
}

console.log(persona); // Eleminamos los valores del objeto con "".

/*
    📌  Ciclo for of
        Nos permite recorrer los valores de un objeto iterable.
        POdemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc.
*/

const etiquetas = document.head.children;
// console.log(etiquetas)

// etiquetas.forEach((etiqueta)=>{
//     console.log(etiqueta)
// } ) NO FUNCIONA

// for(elemento of etiquetas){
//     console.log(elemento)
// } SI FUNCIONA

// Transformamos las etiquetas en array.
[...etiquetas].forEach((elemento) => console.log(elemento));
// Obtenemos el mismo resultado que el que SI FUNCIONA
