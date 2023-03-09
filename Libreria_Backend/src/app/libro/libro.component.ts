import { Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector:'libro',//la forma en la que le voy a llamar 
    //1er forma 
    // template:` //la forma en la que se va a mostrar
    // <h2>Soy el Component libro</h2>
    // `
    //le mando a llamar al html 

    templateUrl:'./libro.component.html'
})
//debe ser público para que se vea desce cualquier parte 
//agrego export para que se pueda llamar desde cualquier lugar 
export class LibroComponent implements OnInit, DoCheck, OnDestroy{//bautizo al archivo 
    public titulo: string; 
    public listado: string; 

    constructor(){
        this.titulo="Componente Libro"; 
        this.listado="lista de los mejores libros"
    }
    cambiarTitulo(){
        this.titulo="Soy el nuevo titulo"
    }
    //metodo que se ejecuta cada vez que se carga el componente
    ngOnInit(): void {
        console.log("soy el OnInit")
    }
    //método que ejecuta cuando se realiza algún cambio 
    ngDoCheck(): void {
        console.log("soy DoCheck")
    }
    //método que se ejecuta cuando se destruye el componente
    ngOnDestroy(): void {
        console.log("soy el Destroy")
    }

}