const title = document.getElementById('title');
const redButton = document.getElementById('red');
const blueButton = document.getElementById('blue');
const blackButton = document.getElementById('black');

// console.log(title);
// console.log(redButton);
// console.log(blackButton);
// console.log(blackButton);

redButton.addEventListener("click", function () {
    title.style = "color: red;";
});

blueButton.addEventListener("click", function () {
    title.style = "color: blue;";
});

blackButton.addEventListener("click", function () {
    title.style = "color: black;";
});