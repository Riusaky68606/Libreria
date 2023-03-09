import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoComponent } from "./contacto/contacto.component";
import { ExternoComponent } from "./externo/externo.component";
import { HomeComponent } from "./home/home.component";
import { LibroComponent } from "./libro/libro.component";
import { ZapatillaComponent } from "./zapatilla/zapatilla.component";

//array de rutas que se va a tener 
const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'libro', component:LibroComponent},
    {path:'zapatilla', component:ZapatillaComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'home', component:HomeComponent},
    {path:'externo', component:ExternoComponent}, 
    {path:'**',component:HomeComponent}//ruta 404 no carga el elemento 
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}