//  objet.assign realiza una copia de los valores 
const img = Object.assign([], document.body.getElementsByTagName("img"));

for (let i = 0; i < img.length; i++) {
    const node = document.createElement("p");
    const text = document.createTextNode(img[i].alt);
    
    node.appendChild(text);
    document.body.replaceChild(node, img[i]);
}