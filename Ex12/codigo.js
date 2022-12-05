let uno = "Nací el 05/04/1982 en Donostia";
let fecha = uno.match(/[0-9][0-9][/][0-9][0-9][/][0-9][0-9][0-9][0-9]/g);
console.log(fecha);

let dos = "facun772@gmail.com";
let email = dos.match(/[a-z 0-9 . -]*[@][a-z 0-9]*\.[a-z]{2,3}/g);
console.log(email);

let tres = "<h1>hola & adios \"</h1>";
tres = tres.replace(/&/g, '&amp;');
tres = tres.replace(/</g, '&lt;');
tres = tres.replace(/>/g, '&gt;');
tres = tres.replace(/\"/g, '&quot;');
console.log(tres);

let nombre = "John Smith";
nombre = nombre.replace(/(\w+)\s(\w+)/g, '$2, $1');
console.log(nombre);

let script = "ahora la aplicación es más segura <script> código malicioso aquí </script>";
script = script.replace(/(?=<script>)(.*)(?=[</script>])*/g, "");
console.log(script);