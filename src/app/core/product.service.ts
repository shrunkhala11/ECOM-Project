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
}
