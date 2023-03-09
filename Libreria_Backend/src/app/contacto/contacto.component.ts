import { Component, OnInit } from '@angular/core';
import { Contactousuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  
  public contacto_usuario: Contactousuario;

  constructor(){
    this.contacto_usuario= new Contactousuario('','','','');
  }
  ngOnInit(): void {
  }
  

}
