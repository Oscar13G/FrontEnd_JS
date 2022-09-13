//Ejercicio 1 S3
//---------------------------------
const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
const doubled = []; 

// for (let index = 0; index < numbers.length; index++){
//     doubled.push(numbers[index] * 2);
// }

//Usando FOROF
for (const num of numbers) {
    doubled.push(num * 2);
}
console.log('Numbers: ', numbers);
console.log('Doubled: ', doubled); 
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> <u><b>Numbers</b></u> = [${numbers.join(', ')}] <br> <u><b>Doubled</b></u> = [${doubled.join(', ')}] <br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);