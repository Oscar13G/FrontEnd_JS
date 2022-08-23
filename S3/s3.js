//Ejercicio 1 S3
//---------------------------------
/* 
const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
const doubled = []; 

// for (let index = 0; index < numbers.length; index++){
//     doubled.push(numbers[index] * 2);
// }

//Usando FOROF
for (const num of numbers) {
    doubled.push(num * 2);
}
console.log('Numbers: ', numbers);
console.log('Doubled: ', doubled); 
*/
//---------------------------------

//Reto 1 S3
//---------------------------------
/* 
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let promedio = 0;

for (let index = 0; index < numbers.length; index++) {
    promedio += numbers[index]
}
promedio = promedio / numbers.length
console.log('El Promedio es: ', promedio); 
 */
//---------------------------------

//Ejercicio 2 S3
//---------------------------------
/*
const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}
const keys = Object.keys(car);
const pairs = [];

for (let i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], car[keys[i]]]);
}
console.log(pairs);
*/
//---------------------------------

//Reto 2 S3
//---------------------------------
/* 
const carObj = {};
const car = [['brand', 'Nissan'], ['model', 'Versa'],
['year', 2020]];

for (let i = 0; i < car.length; i++) {
    carObj[car[i][0]] = car[i][1];
}
console.log(carObj);

//Solicion Propuesta
// const carObj = Object.fromEntries(car);
// console.log(carObj);
 */
//---------------------------------

//Ejercicio 1 S3
//---------------------------------
/* 
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName: name, country: ctry = 'Unknown' } = person;

console.log(name, ctry);
*/
//---------------------------------

//Reto 3 S3
//---------------------------------
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
}

const {links: { social: { facebook: fb, instagram: ig}}} = person;
 console.log(fb, ig);
//---------------------------------