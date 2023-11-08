/* Operadires aritmeticos:

        = Operadir de asignación. Se usa para asignar valores a una variable
        + Sumar
        - Restar
        * Multiplicacion
        / Division
        % Modulo
        ++ Aumentar
        -- Disminuir

*/

const resultado = 10 + 10;
const resultado2 = 10 - 10;
const resultado3 = 10 % 3;

let numero2 = 1;
numero2--;


/* Operadores de asignación:

        += Suma un numero al valor de una variable.
        -= Resta un numero al valor de una variable.
        *= Multiplica un numero al valor de una variable.
        /= Divide un numero al valor de una variable.
        %= Obtiene el sobrante de una division y lo asigna a la variable.

*/

let numero = 10;
numero +=5;

/* Operadores de comparacion:

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

const resultado4 = 5 > 1; //true
const resultado5 = 20 <= 20; //true
const resultado6 = 10 == 10; //true (solo compara el valor)
const resultado7 = 10 === '10'; //false (comnpara valor y type)

const resultado8 = 7 > 1 ? 'El primer valor es mayor que el segundo': 'El segundo valor es mayor que el primero';
// 7 es mayor que 1?? si lo es aparece el primero texto '' sino aparece el segundo texto.
// Sirve para poner condiciones el operador ternario
