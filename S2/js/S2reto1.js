//Reto 1  S2
//---------------------------------
const time = 13;
let greeting;

if (time < 12) {
    greeting = "Buenos Dias";
} else if (time < 20) {
    greeting = "Buenas Tardes";
} else if (time < 25) {
    greeting = "Buenas noches";
} else {
    greeting = 'Error';
}
console.log(greeting);
//---------------------------------