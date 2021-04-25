import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   API_URL = "http://localhost:3000/products" ; 
   API_URL2 = "http://localhost:3000/categories" ; 
  constructor(private http: HttpClient) { }

  getProductStatus(): Observable<any>{
      let api = this.API_URL + "?status=1";
      return this.http.get<any>(api) ; 
  }

  getcateClien2(): Observable<any>{
    return this.http.get<any>(this.API_URL2) ; 
}
  getProductclien(filter : any) : Observable<any>{
    let api  = "http://localhost:3000/products" ; 

    if(filter === 0){
        api+= `?name_like=Áo` ; 
    }

    else{
        api+= `?categoryId=${filter}` ; 
    }

    return this.http.get<any>(api) ; 

  }

  getProductclien2(filter : any) : Observable<any>{
    let api  = "http://localhost:3000/products" ; 
    if(filter === 100){
        api+= `` ; 
    }
    else{
        api+= `?categoryId=${filter}` ; 
    }
    return this.http.get<any>(api) ; 

  }


  getAll():Observable<any>{
    let api = this.API_URL + "?_embed=category" ; 
    return this.http.get<any>(api) ; 
 }

  getAllProduct(filter : any) : Observable<any>{
     let api_url_product = this.API_URL + "?_expand=category&_expand=factory" ; 

     switch (filter.cate) {
      case "0":
        api_url_product += `` ; 
        break;
      case `${filter.cate}`:
        api_url_product += `&categoryId=${filter.cate}` ; 
        break;

    }

     switch (filter.orderBy) {
       case "1":
         api_url_product += `&_sort=price&_order=asc` ; 
         break;
       case "2":
         api_url_product += `&_sort=price&_order=desc` ; 
         break;
       case "3":
         api_url_product += `&_sort=price&_order=desc&_page=1&_limit=1` ; 
         break;
       case "4":
         api_url_product += `&_sort=price&_order=asc&_page=1&_limit=1` ; 
         break;
     }

     if(filter.keyword.length > 0){
      api_url_product += `&name_like=${filter.keyword}`;
    }

     return this.http.get<any>(api_url_product) ; 
  }


  getProductclienList(id:Number , filter:any):Observable<any>{
      let api  = "http://localhost:3000/products" ; 
      if(id == 0 ){
        api += `` ; 
      }else{
        api += `?categoryId=${id}` ; 
      }

      switch (filter.order) {
        case "1":
          api += `&_sort=price&_order=asc` ; 
          break;
        case "2":
          api += `&_sort=price&_order=desc` ; 
          break;
        case "3":
          api += `&_sort=id&_order=desc` ; 
          break;
        case "4":
          api += `&_sort=id&_order=asc` ; 
          break;
      }

      if(filter.name.length > 0){
        api += `&name_like=${filter.name}`;
      }

      return this.http.get<any>(api) ; 

  }


  getProductByCategory(cateId : Number) : Observable<any>{
     let api = this.API_URL + `?categoryId=${cateId}` ;
     return this.http.get<any>(api) ; 
  }

  getProductById(productId: Number):Observable<any>{
     let api_get_product_by_id = `${this.API_URL}/${productId}?_expand=category&_expand=factory` ; 
     return this.http.get<any>(api_get_product_by_id) ; 
  }

  removeProduct(id : Number) : Observable<any>{
     let remove_url = this.API_URL + `/${id}` ; 
     return this.http.delete<any>(remove_url) ; 
  }

  createProduct(obj:any) : Observable<any>{
    obj.categoryId = parseInt(obj.categoryId) ;
    obj.factoryId = parseInt(obj.factoryId) ;
    obj.status = parseInt(obj.status) ;
    return this.http.post<any>(this.API_URL , obj) ; 
  }
  updateProduct(obj:any) : Observable<any>{
    obj.categoryId = parseInt(obj.categoryId) ;
    obj.factoryId = parseInt(obj.factoryId) ;
    obj.status = parseInt(obj.status) ;
    let api = `${this.API_URL}/${obj.id}`; 
    return this.http.put<any>(api , obj) ; 
  }

}
