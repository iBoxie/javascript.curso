const usuario = {
    nombre: 'Andrés',
    pais: 'Ecuador',
};

// if(usuario.pais === 'España'){
//     console.log('El ususario es español');
// } else if(usuario.pais === 'México'){
//     console.log('El ususario es mexicano');
// } else if(usuario.pais === 'Argentina'){
//     console.log('El usuario es argentino')
// } else {
//     console.log('El ususario es de otro país')
// }

switch (usuario.pais) {
    case 'España':
        console.log('El ususario es español');
        break;
    case 'Mexico':
        console.log('El usuario es mexicano');
        break;
    case 'Argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro pais');
}

//El condicional if y else, es mas flexible, dentro de las condiciones podemos preguntar más cosas
