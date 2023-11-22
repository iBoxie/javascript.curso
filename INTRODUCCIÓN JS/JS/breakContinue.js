 /* 
    📌  Break
 */

    const nombres = ["Carlos", "Cristian", "Celia", "Andres", "Ciri", "Cinthia"];

    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i][0] !== 'C'){
            console.log('ALTO! Hay un nombe que no empieza por la letra C')
            console.log(nombres[i] + ' no empieza por la letra C')
            break;
        }
        console.log(nombres[i]) // Para en Celia, no muestra Ciri ni Cinthia.
    }

 /* 
    📌  Continue
        La sentencia continue nos sirve para saltar a la siguiente iteración.
 */

    const invitados = ["Carlos", "Cristian", "Estefania", "Andres", "Erika", "Jesus"];

    for(let i = 0; i < invitados.length; i++){
        if(invitados[i] === 'Andres'){
            continue;
        }
        console.log(invitados[i])
    }