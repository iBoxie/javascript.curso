// const operacion = (tipo, numero1, numero2) => {
//   let resultado; // Asignando una variable para el resultado, podemos guardar el resultado tanto de la suma como la resta aquí
//   if (tipo === "suma") {
//     resultado = numero1 + numero2;
//   } else if (tipo === "resta") {
//     resultado = numero1 - numero2;
//   }

//   return resultado;
// };

const operacion = (tipo, numero1, numero2) => {
    // Otra manera para optimizar el código en este caso es utilizar directamente 'return' en vez de guardarlo en una variable.
    if (tipo === "suma") {
       return numero1 + numero2;
    } else if (tipo === "resta") {
       return numero1 - numero2;
    }

  };

const miVariable = operacion("suma", 100, 11);

console.log(miVariable); // mostrará en consola el valor retornado de la operación
