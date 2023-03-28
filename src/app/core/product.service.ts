import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  saveproduct(body:Products){
    return this.http.post(`http://localhost:3000/products`,body)
  }
  getallProduct(){
    return this.http.get(`http://localhost:3000/products`)
  }
  getpopularProduct(){
    return this.http.get(`http://localhost:3000/products?_limit=3`)
  }
  deletproduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProdcutbyid(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  updateproduct(id:number,body:Products){
    return this.http.put(`http://localhost:3000/products/${id}`,body)
  }
}
