function createNode(type, child) {
    const node = document.createElement(type);

    if (typeof child === "string") {
        const text = document.createTextNode(child);
        node.appendChild(text);
    } else {
        node.appendChild(child);
    }

    return node;
}
// console.log(createNode('h1', createNode('strong', 'Hello World')));
/**
* <h1>
*  <strong>Hello World</strong>
* </h1>
**/

document.getElementById("quote")
    .appendChild(
        createNode("footer", createNode("strong", "- Karl Popper"))
    )