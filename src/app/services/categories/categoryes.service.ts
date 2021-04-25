import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryesService {
  API_URL = "http://localhost:3000/categories" ; 
  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
     let api = this.API_URL + "?_embed=products"; 
     return this.http.get<any>(api) ; 
  }

  deleteCate(id : Number) : Observable<any>{
     let api = this.API_URL + `/${id}` ; 
     return this.http.delete<any>(api) ; 
  }

  addCate(obj: any): Observable<any>{
    return this.http.post<any>(this.API_URL, obj);
  }

  updateCate(obj: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${obj.id}`;
    return this.http.put<any>(requestUrl, obj);
  }

  getCateById(id : any):Observable<any>{
     let api = this.API_URL + `/${id}` ; 
     return this.http.get<any>(api);
  }
}
