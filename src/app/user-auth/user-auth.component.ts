import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import login, { Signup } from '../core/datatype';
import { SellerService } from '../core/seller.service';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  usersignupform:FormGroup=new FormGroup({
    name:new  FormControl('',Validators.required), 
    email:new  FormControl('',Validators.required),
    password: new  FormControl('',Validators.required),
    id:new  FormControl('',Validators.required),
  })
  userloginform:FormGroup=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor(private user:UserService,private route:Router) { }
  UserSignUp(value:Signup){
     this.user.saveuser(this.usersignupform.value).subscribe((res)=>{
      console.log("save user",res)
      localStorage.setItem('user',JSON.stringify(res));
      this.route.navigate(['/'])
     })
  }
  reloaduser(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/'])
    }
  }
  userlogin(value:login){
 console.log(this.userloginform.value)
 this.user.loginuser(this.userloginform.value).subscribe((res:any)=>{
  console.log("this is user responce",res);
  if(res){
    console.log("user log in");
    localStorage.setItem('user',JSON.stringify(res));
this.route.navigate(['/'])
  }else{
    console.log("User login failed")
  }
})  
     
  }
  usersignin:any;
  forusersignup(){
  this.usersignin=false;
  console.log(this.usersignin)
  }
  forusersignin(){
    this.usersignin=true;
  }
  ngOnInit(): void {
    this.forusersignup();
  }


}
