//vamos a generar un service que se encarge de llenar los datos de la zapatilla 
import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

// este elemento se va a injectar en otro lugar 
// reutilizar código e injectar componentes
@Injectable()
export class ZapatillaService{
    public zapatillas : Array <Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla("nike", "rojo", 230, false), 
            new Zapatilla("adiddas", "negro", 330, true),
            new Zapatilla("rebbok", "azul", 130, false),
            new Zapatilla("nike", "negro", 341, true),
        ]
    }
    getZapatillas (): Array<Zapatilla>{
        return this.zapatillas; 
    }
}