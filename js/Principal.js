import Cl_Contratado from "./Cl_Contratado.js";

let contratado1 = new Cl_Contratado("Rafael",30,15)


let salida = document.getElementById("salida")
salida.innerHTML ="Nombre del profesor contratado: "+contratado1.mostrarNombre();
salida.innerHTML +="<br>Monto del Bono: "+contratado1.mostrarBono();
salida.innerHTML +="<br>Cantidad de horas: "+contratado1.mostrarHoras();
salida.innerHTML += "<br>Ingreso total del profesor "+contratado1.mostrarNombre()+": "+contratado1.sueldoTotal();
