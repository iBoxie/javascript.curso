/* 📌 Local Scope o Variables Locales
    - Son las variables declaradas dentro de una función.
    - Solo podemos acceder a ellas desde dentro de la función.
*/

let obtenerNumeroLetras = (nombre) => {
  let numero = nombre.length;

  console.log(`${nombre} tiene ${numero} números de letras`);

  let funcionAnidada = () => {
    console.log(numero);
  };
  funcionAnidada();
};

obtenerNumeroLetras("Andrés");
// console.log(numero) Si yo uso esto, me va a dar error porque no puede acceder a esa variable desde fuera de la función
