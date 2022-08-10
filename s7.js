//Ejercicio 1  S7
//---------------------------------
/*
const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}
// function addColor(car) {
//     car.color = 'Black';
//     return car;
// }
function addColor(car) {
    const newCar = Object.assign({}, car, {
        color: 'Black'
    });
    return newCar;
}
console.log('Before calling addColor()', car);

const sameCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', sameCar);

console.log('Same car?', car === sameCar); // true
*/
//---------------------------------

//Ejercicio 2  S7
//---------------------------------
/* var cart = [
    {
        item: 'Laptop',
        quantity: 1
    }
]
// function addItemToCart(item, quantity) {
//     cart.push({
//         item: item,
//         quantity: quantity
//     })
// }
function addItemToCart(cart, item, quantity) {
    const newCart = cart.map(function (element) {
        return element;
    });

    newCart.push({
        item: item,
        quantity: quantity
    })

    return newCart;
}
cart = addItemToCart(cart, 'Phone', 1);

console.log(cart); */
//---------------------------------

//Ejercicio 3  S7
//---------------------------------
/*
const num = 12345;

// const str = num.toString();

// const array = str.split('');

const array = num.toString().split('');

console.log(num); // 12345
// console.log(str); // '12345'
console.log(array); // ['1', '2', '3', '4', '5']

// const arrayOfNumbers = array.map(function (num) {
//     return Number(num);
// })

const arrayOfNumbers = array.map(Number);

console.log(arrayOfNumbers); // [1, 2, 3, 4, 5]

const sum = arrayOfNumbers.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum); // 15

// //  Encadenando funciones  
// function sumDigits(number) {
//     return number
//         .toString()
//         .split('')
//         .map(Number)
//         .reduce(function (a, b) {
//             return a + b;
//         }, 0)
// }

// console.log(sumDigits(12345)); // 15
*/
//---------------------------------

//Reto 1 S7
//---------------------------------
/*
function flatten(arrays) {
    return arrays.reduce( (a, b) => a.concat(b))
}
//  Pruebas
const arrays = [[1, 2, 3], [4, 5], [6]];
const array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]
*/
//---------------------------------

//Reto 2 S7
//---------------------------------
/*
function compact(array) {
    return array.filter((value) => !!value);
    //  !! forzar conversion a primitivao booleano
}
//  Pruebas
const array = [0, 1, false, 2, '', 3, undefined, null];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]
*/
//---------------------------------

//Reto 3 S7
//---------------------------------

function loop(start, test, update, body) {
    let i = start;
    while (test(i)) {
        body(i);
        i = update(i);
    }
}
const test = function (n) {
    return n > 0;
}
const update = function (n) {
    return n - 1;
}
//  Pruebas
loop(3, test, update, console.log);
  // 3
  // 2
  // 1
 
//---------------------------------