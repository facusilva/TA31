
//recibe por parámetros la imagen a mostrar y la descripción de la imagen seleccionada en las miniaturas
function mostrar(imagen, descr){
    document.getElementById("grande").src="./images/"+imagen; //cambio la propiedad src del elemento img para mostrar una imagen
    var element = document.getElementById("descripcion").innerHTML = descr; //cambio el contenido del párrafo que describe la imágen
}