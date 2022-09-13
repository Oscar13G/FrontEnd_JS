//Reto 2 S4
//---------------------------------

// function getLergerInt(number1, number2) {
//     if (number1 > number2)
//         return number1;
//     else
//         return number2;
// }
// console.log(getLergerInt(4,3));

const getLergerInt = (number1, number2) => 
number1 > number2 ? number1 : number2
// console.log(getLergerInt(4,3));

// const getLergerInt = ([number1, number2]) => 
// number1 > number2 ? number1 : number2
// console.log(getLergerInt([4,3]));
//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const valueOne = document.getElementById("valueOne");
const valueTwo = document.getElementById("valueTwo");
const node = document.createElement("p");

node.className = "textContent";
valueOne.addEventListener("input", function (event) {
  if (!!valueTwo.value) {
    node.innerHTML = `<b>Resultado:</b><br> <u><b>El numero mayo es:
    ${getLergerInt(event.target.value, valueTwo.value)}`;
    contenido.appendChild(node);
  }
});
valueTwo.addEventListener("input", function (event) {
  if (!!valueOne.value) {
    node.innerHTML = `<b>Resultado:</b><br> <u><b>El numero mayor es:
    ${getLergerInt(event.target.value, valueOne.value)}`;
    contenido.appendChild(node);
  }
});
