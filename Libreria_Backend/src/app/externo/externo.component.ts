import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../models/peticions.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {
 
  public user:any; 
  public userId: any; 

  constructor(
    private _peticionesService: PeticionesService

  ){this.userId=1;
  }
 
  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      result=>{
        this.user=result.data;
        console.log("usuario"+this.user);
      },
      error=>{
        console.log(<any>error)
      }
    )
  }

}
