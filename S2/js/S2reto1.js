//Reto 1  S2
//---------------------------------
const time = 25;
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
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Son las <u>${time}:00</u> hrs. --> "<u>${greeting}</u>"<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);