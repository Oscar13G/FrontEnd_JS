// Ejercicio 1 Prework S4
//---------------------------------------------------------------
/*
Deep Equal:
Escribir una función llamada deepEqual que reciba dos argumentos y 
retorne true si son el mismo valor o si son objetos con las mismas 
propiedades, en este último caso los valores de las propiedades deben 
ser comparados con una llamada recursiva de deepEqual.

Usando el operador typeof puedes determinar si ambas variables son 
objetos, de ser así se debe llamar nuevamente deepEqual para comparar
 las propiedades de dichos objetos, en caso contrario solo es necesario 
 revisar si ambas variables son estrictamente iguales.

La función Object.keys() es útil para obtener las propiedades de los 
objetos.
*/

/*
function deepEqual(a, b) {
    let resultado = true;
    let keyA = [], keyB = [];

    //  Evaluar si ambos son Obj
    if (typeof (a) === 'object' && typeof (b) === 'object') {
        //  Se obtienen las keys de ambos Obj
        keyA = Object.keys(a);
        keyB = Object.keys(b);
        //  Se evalua el tamaño de los array
        if (keyA.length === keyB.length) {
            //  Ciclo para evaluar elementos identicos
            for (let i = 0; i < keyA.length; i++) {
                if (deepEqual(a [keyA[i]], b [keyB[i]]))
                    // Recursividad deepEqual para evaluar que sean identicos
                    resultado = true;
                else{
                    //  En caso de alguna propiedad diferente 
                    resultado = false;
                    return resultado;
                }
            }
        } else
            //  Si el tamaño de las Array son diferentes => false
            resultado = false;  
    } else
        //  En caso de no ser ambos Obj se realiza una comparacion
        a === b ? resultado = true : resultado = false;
    return resultado;
}

//  Pruebas
const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(true, true)) // true
console.log('Test 4:', deepEqual(true, 1)) // false
console.log('Test 5:', deepEqual(false, 'false')) // false
console.log('Test 6:', deepEqual(john, john)) // true
console.log('Test 7:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 8:', deepEqual(john, { firstName: 'Kimba', lastName: 'Doe' })) // true
console.log('Test 9:', deepEqual(john, { firstName: 'John' })) // false
*/
//---------------------------------------------------------------

// Ejercicio 2 Prework S4
//---------------------------------------------------------------
/*
Chunk:
Escribir una función chunk que recibe un arreglo y un número entero 
size. 
La función debe dividir el arreglo en múltiples arreglos del tamaño
 determinado por size.
*/

/*
function chunk(array, size) {
    //  Aproximacion para deternimar num de arr dentro de un arr 
    let x = Math.ceil(array.length / size);
    let contador = 0;
    //  Se crea un arr
    const ans = new Array(x);

    for (let i = 0; i < x; i++) {
        //  Se crean arr dentro de cada arr
        ans[i] = new Array(size);
        for (let j = 0; j < size && contador < array.length; j++) {
            //  Se asigna cada valor del arr original
            ans[i][j] = array [contador];
            contador++; 
        }
    }
    return ans;
};
//  Pruebas
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log('Test 1:', chunk(data, 1));
console.log('Test 2:', chunk(data, 2));
console.log('Test 3:', chunk(data, 3));
console.log('Test 4:', chunk(data, 4));
console.log('Test 5:', chunk(data, 5));
*/
//---------------------------------------------------------------

// Ejercicio 3 Prework S4
//---------------------------------------------------------------
/*
Frequency:
Escribir una función frequency que recibe un string como argumento. 
Esta función debe contar la frecuencia o el número de veces que se 
repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean 
los caracteres, y los valores sean la frecuencia. Los resultados 
deben ordenarse de manera ascendente por los caracteres y no la 
frecuencia.
*/


//  Funcion que cuenta las repeticiones de un caracter dado
function numRepeticion(cadena, caracter) {
    let resultado = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter)
            resultado++;
    }
    return resultado;
}
//  Funcion Principal 
function frequency(string) {
    const ans = {};
    let cadena2 = [];

    //  Cambio de string a array
    for (let i = 0; i < string.length; i++)
        cadena2[i] = string[i];
    //  Ordena el array alfabeticamente
    cadena2.sort();
    //  Ciclo mientras la cadena contenga caracteres
    while (cadena2.length > 0) {
        let stringRigth = numRepeticion(cadena2, cadena2[0]);
        //  Al macenar en obj el caractec y sus repeticiones 
        ans[cadena2[0]] = stringRigth;
        //  Eliminar los caracteres repetidos 
        cadena2.splice(0, stringRigth);
    }
    return ans;
}
// Pruebas
console.log('Test 1:', frequency('Vicente Barbosa Leon'));
console.log('Test 1:', frequency('cccbbbaaa'))// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
//---------------------------------------------------------------
