//Ejercicio 1 S4
//---------------------------------
const dateYear = new Date().getFullYear();
console.log(dateYear);
function calculateAge(birthYear) {
  const age = dateYear - birthYear;
  return age;
}
const ageJohn = calculateAge(1995);
console.log(ageJohn); // 25

function yearsUntilRetirement(year, name) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1995, "John Doe");
//---------------------------------
// mostrar en pag
const contenido = document.getElementById("contenido");
const node = document.createElement("p");
const birthYear = document.getElementById("inputYear");

birthYear.max = dateYear;
node.className = "textContent";
birthYear.addEventListener("input", function (event) {
  if (event.target.value >= 1900 && event.target.value < dateYear) {
    node.textContent = `Tu edad es: 
        ${calculateAge(event.target.value)}`;
  } else node.textContent = "";
});

contenido.appendChild(node);
