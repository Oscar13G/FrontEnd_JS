//Reto 2 S3
//---------------------------------
const carObj = {};
const car = [
  ["brand", "Nissan"],
  ["model", "Versa"],
  ["year", 2020],
];
// mostrar en pag
let list = "";

for (let i = 0; i < car.length; i++) {
  carObj[car[i][0]] = car[i][1];
  // mostrar en pag
  list = list.concat(`[ ${car[i][0]}, ${car[i][1]} ], `);
}
console.log(car);
console.log(carObj);

//Solicion Propuesta
// const carObj = Object.fromEntries(car);
// console.log(carObj);

//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
list = list.substring(0, list.length - 2);
node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> <u><b>Array:</b></u> [ ${list} ] <br> <u><b>Objeto</b></u> =  {<br>&emsp;&emsp;brand: '${carObj.brand}',<br>&emsp;&emsp;model: '${carObj.model}',<br>&emsp;&emsp;year: '${carObj.year}',<br>};  <br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);
// {<br>&emsp;&emsp;brand: "Nissan",<br>&emsp;&emsp;model: "Versa",<br>&emsp;&emsp;year: 2020,<br>};
