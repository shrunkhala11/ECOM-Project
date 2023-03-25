import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import login, { Signup } from '../core/datatype';
import { SellerService } from '../core/seller.service';

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
  constructor(private user:SellerService,private route:Router) { }
  UserSignUp(value:Signup){
     this.user.saveseller(this.usersignupform.value).subscribe((res)=>{
      console.log("save user",res)
      localStorage.setItem('user',JSON.stringify(res));
      this.route.navigate(['/'])
     })
  }
  userlogin(value:login){
 console.log(this.userloginform.value)
   this.route.navigate(['/'])  ///optional
     
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
