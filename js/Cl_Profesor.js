export default class Cl_ClProfesor{
    constructor(nombre, bono){
        this.nombre = nombre;
        this.bono = bono;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(n){
        this._nombre =n;
        
    }
    get bono(){
        return this._bono;
    }
    set bono(b){
        this._bono = +b;
    }
}