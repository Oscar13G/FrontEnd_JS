const data = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

const node = document.createElement("table");

document.body.appendChild(node);
for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let key = Object.keys(data[i]);

    for (let j = 0; j < Object.keys(data[0]).length; j++) {
        //  Evaluar si es el encabezado de la tabla
        if (i === 0) {
            //  Se crea encabezado
            let col = document.createElement("th");

            //  Se agrega a la columna texto
            col.appendChild(
                document.createTextNode(
                    //  Cambiar letra minus a mayus el key
                    key[j][0].toUpperCase() + key[j].substring(1)));
            //  Se agrega la col a la fila
            row.appendChild(col);
        } else {
            let col = document.createElement("td");
            //  Se agrega a la columna texto
            col.appendChild(
                //  Se agrega valor del objeto
                document.createTextNode(data[i][key[j]]));
            //  Se agrega la col a la fila
            row.appendChild(col);
        }
    }
    //  Se agrega fila a la tabla
    node.appendChild(row);
}