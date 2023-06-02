function edadendias(){
   let nacimiento = parseInt(prompt ("Ingresa tu fecha de nacimiento"))
   let edad = (2023 - nacimiento) * 365
   
let respuesta = document.createTextNode (`Tu edad en dias es: ${edad}`);

let h2 = document.createElement("h2");

h2.setAttribute("id", "edadendias");

h2.appendChild(respuesta);

document.getElementById("resultado").appendChild(h2);
}

function reset(){
document.getElementById("edadendias").remove();



}