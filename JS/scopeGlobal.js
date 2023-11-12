/* 📌 Global Scope o Variables Globales
    - Son las variables declaradas fuera de una función.
    - Podemos acceder a ellas desde cualquiera parte del código.
    - Podemos usar const y let.
*/

let nombre = "Andrés";

console.log(nombre);

const saludo = () => {
  console.log("Hola " + nombre);

  nombre = 'Marcel'
  console.log('El nuevo nombre ' + nombre)
};

saludo()