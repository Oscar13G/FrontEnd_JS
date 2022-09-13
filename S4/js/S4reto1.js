//Reto 1 S4
//---------------------------------
function potencia(base, exponente) {
  let resultado = 0;
  if (exponente == 0) {
    return 1;
  } else if (exponente == 1) {
    return base;
  }
  resultado = base;
  for (let i = 1; i < exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}
// console.log(potencia(2, 3));
//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const valueBase = document.getElementById("valueBase");
const valueExponent = document.getElementById("valueExponent");
const node = document.createElement("p");

node.className = "textContent";
valueBase.addEventListener("input", function (event) {
  if (!!valueExponent.value) {
    node.innerHTML = `<b>Resultado:</b><br> <u><b>El resultado es:</b></u> = ${potencia(
      event.target.value,
      valueExponent.value
    )} <br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
    contenido.appendChild(node);
  }
});
valueExponent.addEventListener("input", function (event) {
  if (!!valueBase.value) {
    node.innerHTML = `<u><b>El resultado es:</b></u> = ${potencia(
      valueBase.value,
      event.target.value
    )} <br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
    contenido.appendChild(node);
  }
});
