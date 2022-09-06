const listNum = [];
//Reto 2  S2
//---------------------------------
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        listNum.push(i);
        console.log(i);
    }
}
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Los numeros pares son:<br> ${listNum.join(' ,')}.<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);