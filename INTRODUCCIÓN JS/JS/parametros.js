/*
-   Parametros: los valores específicos en la definición
-   Argumentos: los valores que le pasamos a la función cuando la invocamos
*/

//'nombre' aquí es parametro
const saludo = (nombre = 'amigo') =>
    console.log(`Hola ${nombre}!`);
//Lo que está dentro de ('') son argumentos
saludo('Andrés');
saludo('Carlos');
saludo('Cesar');
saludo();

/*
    Multiple parametros
*/

const operacion = (tipo, numero1, numero2) => {
    //console.log(numero1 + numero2)
    if(tipo === 'suma'){
        console.log (numero1 + numero2);
    } else if(tipo === 'resta'){
        console.log (numero1 - numero2);
    }
;}

operacion('suma', 2000, 125);
operacion('resta', 400, 20);