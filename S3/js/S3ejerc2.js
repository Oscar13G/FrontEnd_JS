//Ejercicio 2 S3
//---------------------------------
const car = {
  brand: "Nissan",
  model: "Versa",
  year: 2020,
};
const keys = Object.keys(car);
const pairs = [];
// mostrar en pg
let lista = '';
// -----------------

for (let i = 0; i < keys.length; i++) {
  pairs.push([keys[i], car[keys[i]]]);
  lista = lista.concat(`<li>[ ${keys[i]}, ${car[keys[i]]} ]</li>`);
}
console.log(car);
console.log(pairs);
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> <u><b>Objeto</b></u>  = {<br>&emsp;&emsp;brand: "Nissan",<br>&emsp;&emsp;model: "Versa",<br>&emsp;&emsp;year: 2020,<br>}; <br> <u><b>Pairs</b></u> = <ul>${lista}</ul> *NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);