/* 📌 Operadores lógicos

        &&  and
        ||  or
        !   not

*/

const nombre = 'Carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

// 📌 Ejemplo #1 - &&
const permitirAcceso = edad >= 18 && tieneEntrada;
console.log('Acceso permitido al concierto: ' + permitirAcceso);

// 📌 Ejemplo #2 - OR
const permitirAcceso2 = (edad >= 18 && tieneEntrada)  || (tienePermiso && tieneEntrada) ;
//Si la primera condicion no se cummple que se ejecute la segunda condición
console.log ('Acceso permitido al concierto: ' + permitirAcceso2);

// 📌 Ejemplo #3 - !
const variable = false;
console.log(!variable);
//Cambia el valor si es verdadero a falso y viceversa (true or false)