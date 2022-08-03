//Ejercicio 1 S5
//---------------------------------
/*
//  Variable global
const name = 'John Doe'

function foo(){
    console.log(name);
}

foo();
function foocho(){
    //  Variable local
    const bar = 'John doe';
    console.log(name);
    console.log(bar);
}
foocho();
//  La variable "bar" no es alcanzada desde este punto
*/
//---------------------------------

//Ejercicio 1.1 S5
//---------------------------------
/*
if (true) {
    var foo = 'John Doe'
    console.log(foo);
    
}
//  var genera una global por efinicion 
console.log(foo);
*/
//---------------------------------

//Ejercicio 1.2 S5
//---------------------------------
/*
var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for (let i = 0; i < numbers.length; i++)
    doubles.push(numbers[i] * 2);

console.log(numbers);
console.log(doubles);
//  Marca error, i no es alcanzable desde este punto 
console.log(i); 
*/
//---------------------------------

//Ejercicio 1.3 S5
//---------------------------------
/*
function logThis() {
    console.log("Is this === window? " + (this === window))
}

const foo = {
    logThis: logThis
}

logThis() // Is this === window? true

foo.logThis() // Is this === window? false
*/
//---------------------------------

//Reto 1 S5
//---------------------------------
/*
var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    let values = []

    for (let i = 0; i < list.length; i++)
        values.push(list[i][propertyName]);
    return values;
}
//    Pruebas
console.log(pluck(singers, 'name'));
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log(pluck(singers, 'band'));
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log(pluck(singers, 'born'));
  // [1948, 1950, 1967, 1964]
*/
//---------------------------------

//Reto 2 S5
//---------------------------------
/*
// Evalua que number sea numero
// Evalua que el valor este entre 0 y 9
// Evalua que number es un numero entero
function isNumber(number) {
    if (typeof (number) === 'number' &&
        number < 10 && number >= 0 &&
        Number.isInteger(number)) return true;
    else return false;
}
//  Evalua que los elementos de un array 
//  cumplan las condiciones de isNumber
function verifArrayNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isNumber(numbers[i])) { }
        else return false;
        return true;
    }
}
//  Funcion principal, crea el formato requerido 
function createPhoneNumber(numbers) {
    let ans = '(';
    //  Valida tamaño y contenido de array
    if (verifArrayNumber(numbers) === false || numbers.length !== 10)
        return console.log('Error de formato.');
    else {
        //  concatenacion de elementos
        for (let i = 0; i < numbers.length; i++) {
            switch (i) {
                case 2:
                    ans = ans.concat(numbers[i], ') ');
                    break;
                case 5:
                    ans = ans.concat(numbers[i], '-');
                    break;
                default:
                    ans = ans.concat(numbers[i]);
                    break;
            }
        }
        return console.log(ans);
    }
}
//  Pruebas
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

createPhoneNumber(num); // "(123) 456-7890"
*/
//---------------------------------

//Reto 3 S5
//---------------------------------
//  Creada en el reto 2, modificada 
function isNumber(number) {
    if (typeof (number) === 'number' &&
        Number.isInteger(number)) return true;
    else return false;
}
//  Creada en el reto 2.
function verifArrayNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (isNumber(numbers[i])) { }
        else return false;
        return true;
    }
}
//  Funcion que encuentra valores faltantes de un Array
function findMissingNumbers(numbers) {
    let ans = [];

    if (verifArrayNumber(numbers) === false)
        return console.log('Error de formato.');
    else {
        //  Ordenamiento de menor a mayor
        numbers.sort(function (a, b) { return a - b });
        //  Evaluar actual-siguiente
        for (let i = 0; i < numbers.length; i++) {
            //  si son consecutivos (No accion)
            if (numbers[i] + 1 === numbers[i + 1]) { }
            else {
                let actual = numbers[i];
                //  ciclo meintras act-sig son consecutivos
                while (actual + 1 < numbers[i + 1])
                    //  Agrego valor al array  
                    ans.push(++actual);
            }
        }
        return console.log(ans);
    }
}
//  Pruebas
findMissingNumbers([1, 2, 7, 10]); // [3, 4, 5, 6, 8, 9]
findMissingNumbers([2, 1, 9, 5, 7, 3, 10]); // [4, 6, 8]
findMissingNumbers([-5,0, 5]); // [-4, -3, -2, -1, 1, 2, 3, 4]
//---------------------------------