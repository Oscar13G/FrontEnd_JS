//Ejercicio 1 S4
//---------------------------------
/*
function calculateAge(birthYear) {
    const age = 2020 - birthYear;
    return age;
}
const ageJohn = calculateAge(1995);
console.log(ageJohn); // 25

function yearsUntilRetirement(year, name) {
    const age = calculateAge(year);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1995, 'John Doe');
*/
//---------------------------------

//Reto 1 S4
//---------------------------------
/*
function potencia(base, exponente){
    let resultado=0;
    if (exponente === 0) {
        return 1;
    }else if(exponente === 1){
        return base;
    }
    resultado = base;
    for (let i = 1; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
console.log(potencia(2,3));
*/
//---------------------------------

//Ejercicio 2 S4
//---------------------------------
//---------------------------------

//Reto 2 S4
//---------------------------------
/* 
// function getLergerInt(number1, number2) {
//     if (number1 > number2)
//         return number1;
//     else
//         return number2;
// }
// console.log(getLergerInt(4,3));

const getLergerInt = (number1, number2) => 
number1 > number2 ? number1 : number2
console.log(getLergerInt(4,3));

// const getLergerInt = ([number1, number2]) => 
// number1 > number2 ? number1 : number2
// console.log(getLergerInt([4,3]));
 */
//---------------------------------

//Ejercicio 3 S4
//---------------------------------
//---------------------------------

//Reto 3 S4
//---------------------------------
/*
//no contempla al valor cero
function fibonacciSequence(limit) {
    const list = [];

    if (limit > 0) {
        for (let i = 0; i < limit; i++) {
            if (i < 2)
                list.push(1);
            else
                list.push(list[i-2] + list[i-1]);
        }
        console.log(list);
    } else
        console.log('Error de rango');
}
fibonacciSequence(1);
fibonacciSequence(2);
fibonacciSequence(3);
fibonacciSequence(8);
*/

//funciona al 100%
function fibonacciSequence(limit){
    const listNum = [0];

    if (limit < 0) 
        return console.log('Error de rango'); 
    else{
        for (let i = 1; i <= limit; i++) {
            if(i === 1)
                listNum.push(1)
            else
                listNum.push(listNum[i-2] + listNum[i-1]);
        }
    }     
    return console.log(listNum);
}

//  Pruebas
fibonacciSequence(-1);
fibonacciSequence(0);
fibonacciSequence(1);
fibonacciSequence(2);
fibonacciSequence(3);
fibonacciSequence(15);
//---------------------------------