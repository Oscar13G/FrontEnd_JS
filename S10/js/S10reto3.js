function createTabs(node) {
  const div = document.createElement("div");
  const listTabs = [];

  //  Oculta los elementos tab
  Array.from(node.children).forEach((tabs) => (tabs.style.display = "none"));
  //  Crea copia en un array de los elementos tab  
  Object.assign(Array.from(node.children)).forEach((tabs) => {
    let button = document.createElement("button");
    //  Asigna valor de tab en button
    button.appendChild(
      document.createTextNode(tabs.getAttribute("data-tabname"))
    );
    //  Se crea un objeto con tab y button, se guarda en un array
    listTabs.push(new relTabBott(tabs, button));
    div.appendChild(button);
  });
  node.insertBefore(div, node.firstChild);
  //  Event 
  listTabs[0].button.addEventListener("click", () => actionButton(0));
  listTabs[1].button.addEventListener("click", () => actionButton(1));
  listTabs[2].button.addEventListener("click", () => actionButton(2));
  //  Asignacion dependiendo el evento
  function actionButton(index) {
    for (let i = 0; i < listTabs.length; i++) {
      if (index === i) {
        listTabs[i].tab.style.display = "block";
        listTabs[i].button.style.color = "red";
      }else{
        listTabs[i].tab.style.display = "none";
        listTabs[i].button.style.color = "";
      }
    }
  }
}
//  Class relacion de tab y button
class relTabBott {
  constructor(tab, button) {
    this.tab = tab;
    this.button = button;
  }
}
//  Pruebas
createTabs(document.getElementById("tab-panel"));
