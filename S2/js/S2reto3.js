const listNum = [];
//Reto 3  S2
//---------------------------------
let primo = false;
for (let i = 1; i <= 100; i++) {
    if (i < 4) {
        listNum.push(i);
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
                listNum.push(i);
                console.log(i);
            }
        }
    }
}
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Los numeros pares son:<br> ${listNum.join(' ,')}.<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);