//Ejercicio 1 S2
//---------------------------------
const day = new Date();
const time = day.getHours();
let greeting;

if (time < 12) {
    greeting = "Buenos Dias";
}
else if (time < 20) {
    greeting = "Buenas Tardes";
}
else if (time < 25) {
    greeting = "Buenas noches";
}
console.log(greeting);
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Son las <u>${time}:${day.getMinutes()}</u> hrs. --> "<u>${greeting}</u>"<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);

