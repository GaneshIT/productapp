import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
const baseUrl="http://localhost:5198/api/Product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  addProduct(product:any):Observable<any>{
    return this.http.post(baseUrl+'/Create',product);
      }
  updateProduct(product:any,id:any):Observable<any>{
        return this.http.put(baseUrl+'/Update?id='+id,product);
          }
  deleteProduct(id:number):Observable<any>{
            return this.http.delete(baseUrl+'/Delete?id='+id);
              }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(baseUrl+'/GetProducts');
  }
  getById(id:any):Observable<Product>{
    //http://localhost:5198/api/Product/GetProductById?id=1
    return this.http.get<Product>(baseUrl+'/GetProductById?id='+id);
  }
}
