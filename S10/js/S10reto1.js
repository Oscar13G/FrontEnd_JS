const balloon = document.getElementsByTagName("p");
let value = 20;

balloon[0].style = `font-size: ${value}px`;
//  Funcion de accion de las flechas
function arrows(event) {
    //  Fecha UP
    if (event.key == "ArrowUp") {
        //  Se elimina su uso normal (desplazamiento en pag)
        event.preventDefault()
        //  condicion maxima
        if (value > 80) {
            balloon[0].textContent = '💥';
            //  Se elimina en event handler
            window.removeEventListener("keydown", arrows);
        } else
            //  Aumentar valor 
            balloon[0].style = `font-size: ${value += 10}px`;
    } else if (event.key == "ArrowDown") {
        event.preventDefault()
        if (value > 20)
            balloon[0].style = `font-size: ${value -= 10}px`;
    }
};
//  Agregamos el event handler
window.addEventListener("keydown", arrows);