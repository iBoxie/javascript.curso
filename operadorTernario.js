const boleto = 'vip';
// let codigoAcceso;

// Aquí vemos en que caso se usa const y let
// const tiene el valor definido
// let no, cambia su valor

// if(boleto === 'vip'){
//     codigoAcceso = 'VIP-123-456';
// } else {
//     codigoAcceso = 'REGULAR-456-789';
// }

const codigoAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';


boleto === 'vip' ? console.log('Tu boleto es de tipo VIP') : console.log('Tu codigo es de tipo REGULAR');