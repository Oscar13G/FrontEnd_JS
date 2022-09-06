// mostrar en pag
//---------------------------------
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
const lista = document.createElement("ul");

node.className = "textContent";
node.innerHTML = '<b>Resultado:</b><br>El mensaje "Hello World" se repetira 5 veces:';
node.appendChild(lista);
contenido.appendChild(node);
//---------------------------------

//Ejercicio 3 S2
//---------------------------------
for (let i = 1; i <= 5; i++) {
  // mostrar en pag
  // ---------------------------------
  let li = document.createElement("li");
  li.textContent = "Hello World";
  lista.appendChild(li);
  // ---------------------------------
  console.log("Hello World");
}
//---------------------------------

// mostrar en pag
// ---------------------------------
node.appendChild(
    document.createTextNode(
        '*NOTA: Presiona F12 para ver el resultado en consola.'));
// *NOTA: Presiona F12 para ver el resultado en consola.
// ---------------------------------
