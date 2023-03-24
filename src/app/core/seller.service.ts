import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  saveseller(body:Signup){
     return this.http.post(`http://localhost:3000/seller`,body)
  }
  
  

}
