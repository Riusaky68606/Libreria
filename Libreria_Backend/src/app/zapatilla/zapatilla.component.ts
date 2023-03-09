import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector:'zapatilla',//la forma en la que le voy a llamar 
    templateUrl:'./zapatilla.component.html', 
    providers:[ZapatillaService]//reusar algún código, injectar elementos 
    //que proveedor voy a usar 
})

export class ZapatillaComponent implements OnInit{
    public titulo: string = "Componente zapatilla"
    public zapatillas: Array<Zapatilla> = [];
    public color: string; 

    constructor(
        private _zapatillaService: ZapatillaService // el priver que voy a usar 
    ){
        this.color='red'; 
    }

    ngOnInit(){
        //this.zapatillas=["nike", "azul", "80"]; 
        // this.zapatillas = [
        //     new Zapatilla("nike", "rojo", 230, false), 
        //     new Zapatilla("adiddas", "negro", 330, true),
        //     new Zapatilla("rebbok", "azul", 130, false),
        //     new Zapatilla("nike", "negro", 341, true),
        // ]
        //this.zapatillas=["rebook", "verde", "130"];
        // console.log(this.zapatillas);

        //una vez que carge ya lo tengo listo 
        this.zapatillas = this._zapatillaService.getZapatillas()
    }
}