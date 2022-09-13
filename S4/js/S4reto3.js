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
function fibonacciSequence(limit) {
  const listNum = [0];

  if (limit < 0) return console.log("Error de rango");
  else {
    for (let i = 1; i <= limit; i++) {
      if (i === 1) listNum.push(1);
      else listNum.push(listNum[i - 2] + listNum[i - 1]);
    }
  }
  // return console.log(listNum);
  return listNum;
}

//  Pruebas
// console.log(fibonacciSequence(-1));
// console.log(fibonacciSequence(0));
// console.log(fibonacciSequence(1));
// console.log(fibonacciSequence(2));
// console.log(fibonacciSequence(3));
// console.log(fibonacciSequence(15));
//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
const inputLimit = document.getElementById("inputLimit");

node.className = "textContent";
inputLimit.addEventListener("input", function (event) {
  if (event.target.value > 0 && event.target.value <= 20) {
    node.innerHTML = `<b>Resultado:</b><br> Secuencia --> ${fibonacciSequence(
      event.target.value - 1
    ).join(", ")}`;
  } else node.innerHTML = `<b>Resultado:</b><br> Secuencia --> Sin elementos`;
});
contenido.appendChild(node);
