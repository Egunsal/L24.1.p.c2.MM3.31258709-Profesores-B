import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Fijo extends Cl_Profesor{
    constructor(nombre, bono, sueldo){
        super(nombre, bono)
        this.sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(s){
        this._sueldo = +s
    }
    sueldoTotal(){
        return this._sueldo+this._bono;
    }
    mostrarNombre(){
        return this._nombre;
    }
} 