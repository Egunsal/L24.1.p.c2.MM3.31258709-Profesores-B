import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre,bono,horas){
       super(nombre,bono)
       this.horas = horas;      
    }
    get horas(){
        return this._horas;
    }
    set horas(h){
        this._horas = +h;
    }
    sueldoTotal(){
        return this.horas*10 + this.bono;
    }
    mostrarNombre(){
        return this._nombre;
    }
    mostrarBono(){
        return this._bono;
    }
    mostrarHoras(){
        return this._horas;
    }
}
