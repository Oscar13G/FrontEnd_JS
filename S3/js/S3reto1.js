//Reto 1 S3
//---------------------------------
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let promedio = 0;

for (let index = 0; index < numbers.length; index++) {
    promedio += numbers[index]
}
promedio = promedio / numbers.length
console.log(numbers);
console.log('El Promedio es: ', promedio); 
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> <u><b>Numbers</b></u> = [ ${numbers.join(', ')} ].<br>El promedio es: ${promedio} <br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);