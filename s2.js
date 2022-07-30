//Ejercicio 1 S2
//---------------------------------
/*
const time = 13;
let greeting;

if (time < 12) {
    greeting = "Buenos Dias";
}
if (time < 20) {
    greeting = "Buenas Tardes";
}
if (time < 25) {
    greeting = "Buenas noches";
}
console.log(greeting);
*/
//---------------------------------

//Ejercicio 2 S2
//---------------------------------
/*
const day = 2;
let text;

switch (day) {
    case 0:
        text = "Domingo";
        break;
    case 1:
        text = "Lunes";
        break;
    case 2:
        text = "Martes";
        break;
    case 3:
        text = "Miercoles";
        break;
    case 4:
        text = "Jueves";
        break;
    case 5:
        text = "Viernes";
        break;
    case 6:
        text = "Sabado";
        break;
    default:
        text = "Error";

}
console.log(text); // Tuesday
*/
//---------------------------------

//Ejercicio 3 S2
//---------------------------------
/*
for (let i = 0; i <= 200; i++) {
    console.log("Hello World");
}
*/
//---------------------------------

//Reto 1  S2
//---------------------------------
/*
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
*/
//---------------------------------

//Reto 2  S2
//---------------------------------
/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/
//---------------------------------

//Reto 3  S2
//---------------------------------

let primo = false;
for (let i = 1; i <= 100; i++) {
    if (i < 4) {
        console.log(i);
    } else {
        for (let j = i - 1; j > 0; j--) {
            if (i % j !== 0) {
                primo = true;
            } else {
                primo = false;
                break;
            }
            if (primo === true && j === 2) {
                console.log(i);
            }
        }
    }
}

//---------------------------------