//Reto 3 S3
//---------------------------------
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
}

const {links: { social: { facebook: fb, instagram: ig}}} = person;
 console.log(fb);
 console.log(ig);
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> Variables:<br> <u><b>fb</b></u> = ${fb}<br> <u><b>ig</b></u> = ${ig}<br><br>*NOTA: Presiona F12 para ver el resultado en consola.`;
contenido.appendChild(node);