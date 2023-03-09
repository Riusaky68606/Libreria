// se va a encargar de hacer consulta y devolver una url 
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"; 
import { Observable } from "rxjs";
@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public _http:HttpClient
    ){
        this.url="https://reqres.in/"
    }
    getUser(userId:number):Observable<any>{
        //petición por ajax http
        return this._http.get(this.url+'api/users/'+userId);
    }
}

