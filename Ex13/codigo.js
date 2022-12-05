
let allParrafos = document.getElementsByTagName('p'); //selecciono todos los párrafos
for(let i=0;i<allParrafos.length;i++){
    allParrafos[i].onclick = fueratabla; //añado un evento onclick a los elementos
}

let tableParrafos = document.querySelectorAll('td > p'); //selecciono los párrafos dentro de la tabla
for(let i=0;i<tableParrafos.length;i++){
    tableParrafos[i].onclick = dentrotabla; //añado un evento onclick a los elementos
}


function fueratabla(){
    alert("Se presionó un párrafo del documento");
}

function dentrotabla(){
    alert("Se presionó un parrafo contenido en la segunda tabla");
}