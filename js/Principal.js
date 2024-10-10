import Cl_Contratado from "./Cl_Contratado.js";

let contratado1 = new Cl_Contratado("Rafael",30,15)


let salida = document.getElementById("salida")
salida.innerHTML = "Ingreso total del profesor "+contratado1.mostrarNombre()+": "+contratado1.sueldoTotal();