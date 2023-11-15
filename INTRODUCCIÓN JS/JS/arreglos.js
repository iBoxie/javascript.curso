const arreglo = ['texto', 456.1, false, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Blanco'; //Amarillo lo sosbrescribe //Elemento 2 aparece 1 empty slot
colores[3] = 'Amarillo';


colores.push('Azul'); //agrega un nuevo valor
console.log(colores);
console.log('El arreglo colores tiene: ' + colores.length + ' colores');