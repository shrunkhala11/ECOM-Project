import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import login, { Signup } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveuser(body:Signup){
    return this.http.post(`http://localhost:3000/users`,body)
  }


  loginuser(data:login){
    return this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
  }
}
