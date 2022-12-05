let valor = document.getElementsByClassName("btn").value;
//declaro las variables que almacenarán los valores y el operador para hacer los cálculos
var a = "";
var b = "";
var operador= "";

//recibe por parámetros el botón que se ha clicado
function asignanum(boton){
    //si aún no se ha elegido operador estamos decidiendo el valor a
    if(operador===""){
        a += boton;
        document.getElementById("pantalla").value += boton;
        console.log(a);
    }else{
        b += boton;
        document.getElementById("pantalla").value += boton;
    }
}

//recibe por parámetros el botón que se ha clicado
function operacion(boton){
    operador = boton;
    document.getElementById("pantalla").value += boton;//lo asigna al operador
}


//según el operador elegido hace el cálculo con los dos valores y muestra el resultado por pantalla
function calcular(){
    let resultado = 0;
    switch(operador){
        case "+":
            resultado = parseInt(a) + parseInt(b);
            break;
        case "-":
            resultado = parseInt(a) - parseInt(b);
            break;
        case "*":
            resultado = parseInt(a) * parseInt(b);
            break;
        case "/":
            resultado = parseInt(a) / parseInt(b);
            break;
    }
    document.getElementById("pantalla").value += "="+resultado;
}

//borra el contenido que se muestra por pantalla y pone las variables con sus valores pro defecto
function borrar(){
    document.getElementById("pantalla").value = "";
    a = "";
    b = "";
    operador= "";
}