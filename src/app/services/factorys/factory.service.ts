import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  API_URL = "http://localhost:3000/factories" ; 

  constructor( private http : HttpClient) { }

  getAll():Observable<any>{
     let api = this.API_URL + "?_embed=products" ; 
     return this.http.get<any>(api) ; 
  }

  deleteFactory(id : any) : Observable<any>{
     let api = this.API_URL + `/${id}` ;
     return this.http.delete<any>(api) ;
  }

  addFactory(obj : any) : Observable<any>{
     return this.http.post<any>(this.API_URL , obj) ;
  }

  updateFactory(obj:any) : Observable<any>{
     let api = `${this.API_URL}/${obj.id}`; 
     return this.http.put<any>(api, obj) ; 
  }

  getFactoryById(id : any):Observable<any>{
    let api = this.API_URL + `/${id}` ; 
    return this.http.get<any>(api);
 }
  
}
