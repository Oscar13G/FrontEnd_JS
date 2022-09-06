//Ejercicio 2 S2
//---------------------------------
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
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Valor de prueba: <u>${day}</u> --> "<u>${text}</u>"<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);