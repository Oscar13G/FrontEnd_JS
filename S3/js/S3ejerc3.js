//Ejercicio 1 S3
//---------------------------------
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName: name, country: ctry = 'Unknown' } = person;

console.log(person);
console.log(name, ctry);
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> <u><b>Objeto</b></u>  = {<br>&emsp;&emsp;firstName: 'John',<br>&emsp;&emsp;lastName: 'Doe'<br>}; <br> Variables:<br> <u><b>Name</b></u> = ${name}<br> <u><b>Country</b></u> = ${ctry}<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);