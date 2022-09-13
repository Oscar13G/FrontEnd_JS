// mostrar en pag
//---------------------------------
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
const value = document.getElementById("valueHello");

node.className = "textContent";
contenido.appendChild(node);
//---------------------------------

//Ejercicio 3 S2
//---------------------------------
//  Cambio a funcion para visualizacion
function forHello(value) {
  let lista = "";
  for (let i = 1; i <= value; i++) {
    console.log("Hello World");
    lista = lista.concat("<li>Hello World</li>");
  }
  return lista;
}

//---------------------------------
value.addEventListener("input", function (event) {
  if (event.target.value < 6 && event.target.value > 0) {
    node.innerHTML = `El mensaje "Hello World" se repetira ${
      event.target.value
    } veces:<br><ul>${forHello(event.target.value)}</ul>`;
  }
});
