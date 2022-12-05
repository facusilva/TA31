//cuando se cargue la página se llama a la función reloj
reloj();

//cada un segundo se llamará a la función
var interval = window.setInterval(function(){
    reloj();
}, 1000);


function reloj(){
    let fecha = new Date();//crea una instancia Date()
    let horas = fecha.getHours(); //obtengo las horas
    document.getElementById("horas").innerHTML = horas;//asigno el valor al párrafo de horas
    let minutos = fecha.getMinutes();//obtengo los minutos
    document.getElementById("minutos").innerHTML = minutos; //asigno el valor al párrafo de minutos
    let segundos = fecha.getSeconds();//obtengo los segundos
    document.getElementById("segundos").innerHTML = segundos //asigno el valor la párrafo de segundos
}