//Ejercicio 2 S2
//---------------------------------
//  Cambio a funcion para visualizacion
function nameDay(number) {
  let text;
  switch (number) {
    case '0':
      text = "Domingo";
      break;
    case '1':
      text = "Lunes";
      break;
    case '2':
      text = "Martes";
      break;
    case '3':
      text = "Miercoles";
      break;
    case '4':
      text = "Jueves";
      break;
    case '5':
      text = "Viernes";
      break;
    case '6':
      text = "Sabado";
      break;
    default:
      text = "Error";
  }
  console.log(text); // Tuesday
  return text;
}
//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
const inputDay = document.getElementById("inputDay");

node.className = "textContent";
inputDay.addEventListener("input", function (event) {
  node.innerHTML = `"<u>${nameDay(event.target.value)}</u>"<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
  contenido.appendChild(node);
});