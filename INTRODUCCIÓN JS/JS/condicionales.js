/* 📌 Operadores de comparacion:

        ==      Igual que
        ===     Igual en valor y type de valor
        !=      Diferente
        !==     Diferente en valor y diferente en type
        >       Mayor que
        <       Menor que
        >=      Mayor o igual que
        <=      Menor o igual que
        ?       Operador ternario

*/

/* 📌 Operadores lógicos

        &&  and
        ||  or
        !   not

*/

// 📌 Estructura de una condicional

//if (true/lo que vamos a preguntar) {
// Código a ejectuar
// }


// 📌 Ejemplo #1
// const usuario = {
//     edad: 17,
//     pais: 'México',
//     ticket: true,
// };
// if (usuario.edad <= 18 && usuario.ticket) {
//     console.log('El ususario es menor de edad y tiene ticket')
// }

// 📌 Ejemplo #2 combinando operadores
// if (usuario.edad >= 18 && usuario.ticket) {
//     console.log('El usuario es mayor de edad y tiene un ticket');

// } else {
//     console.log('El usuario es menor de edad o no tiene un ticket');
// }

//  📌 Ejemplo #3 - Anindando condicionales
// const usuario = {
//     edad: 27,
//     pais: 'México',
//     ticket: false,
// };

// if(ususario.edad >= 18){
//     if(usuario.ticket){
//         console.log('El ususario es mayor de edad y tiene ticket')
//     } else {
//         console.log('El usuario es mayor de edad, pero no tiene ticket')
//     }
// } else {
//     console.log('El ususario es menor de edad')
// }

// 📌 Ejemplo #4 -elseif
const usuario = {
    edad: 27,
    pais: 'Argentina',
    ticket: false,
};

if(usuario.pais === 'México'){
    console.log('El usuario es de mexicano')
} else if(usuario.pais === 'Colombia'){
    console.log('El usuario es colombiano')
} else if(usuario.pais === 'España'){
    console.log('El usuario es español')
} else {
    console.log('El usuario es de otro país')
}