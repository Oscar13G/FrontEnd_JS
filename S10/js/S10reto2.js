const openButton = document.getElementsByTagName("button");
const closeModal = document.getElementsByClassName("close");
const modalStyle = document.getElementById("modal");
const contentModal = document.getElementById("modal-image");

openButton[0].addEventListener("click", function () {
    modalStyle.style.display = "block";
    contentModal.src = "https://picsum.photos/300/200";
});
closeModal[0].addEventListener("click", function () {
    modalStyle.style.display = "none";
});