var resultados = [0,0,0,0,0,0,0,0,0,0,0,0];//creo un array con tantas posiciones como resultados posibles

for(let i = 0; i<36000; i++){
    let a = Math.floor(Math.random() * 6) +1; //saco el primer número entre 1 y 6
    let b = Math.floor(Math.random() * 6) +1; //saco el segundo número entre 1 y 6
    let index = (a+b) -1; //esta será la posición del array que corresponde a la suma de los dos números, le resto 1 porque el array empieza en la posición 0
    resultados[index] = resultados[index]+1; //a la posición del array le asigno el número que corresponde a la suma de a y b
}
