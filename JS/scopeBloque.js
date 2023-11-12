/* 📌 Block Scope / Alcande de tipo bloque
    - Pertenece las variables declaras con const o let dentro de un bloque {}
    - Solo pododemos acceder a ellas dentro del bloque.
*/

const edad = 19;
const accesoPermitido = false;

if (edad > 18) {
  const accesoPermitido = true;
  console.log(accesoPermitido); // aparece lo escrito en el const accesoPermitido = true DENTRO DEL BLOQUE

  if (true) {
    console.log(accesoPermitido); // aparece lo escrito en el const accesoPermitido = true
  }

  const miFuncion = () => {
    console.log(accesoPermitido); // aparece lo escrito en el const accesoPermitido = true
  };
  miFuncion();
}

console.log(accesoPermitido); // aparece lo escrito en el let accesoPermitido = false FUERA DEL BLOQUE

//
if (true) {
  var nombre = "Carlos";
  console.log(nombre);
}

console.log(nombre) // Solo con 'var' se puede acceder a ella FUERA DEL BLOQUE (no se recomienda usar)
//