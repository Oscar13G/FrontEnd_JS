//Ejercicio 2 S4
//---------------------------------
const whatDoYouDo = function(job, name) {
  switch (job) {
    case 'developer':
      return name + ' develops cool apps.';
    case 'designer':
      return name + ' designs awesome websites.';
    default:
      return name + ' does something else.'
  }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));
//---------------------------------
// mostrar en pag
const contenido = document.getElementById('contenido');
const node = document.createElement('p');

node.className = "textContent";
node.innerHTML = `<b>Resultado:</b><br> 
<ul><li>${whatDoYouDo('developer', 'John Doe')}</li>
<li>${whatDoYouDo('designer', 'Jane Doe')}</li>
<li>${whatDoYouDo('retired', 'Mark Doe')}</li></ul>`;
contenido.appendChild(node);