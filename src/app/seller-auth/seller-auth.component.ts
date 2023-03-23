import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  sellersignupform:FormGroup=new FormGroup({
    name:new  FormControl('',Validators.required), 
    email:new  FormControl('',Validators.required),
    password: new  FormControl('',Validators.required),
    id:new  FormControl('',Validators.required),
  })
  sellerloginform:FormGroup=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor() { }
  SellerSignUp(value:FormGroup){
     console.log(this.sellersignupform.value)
  }
  sellerlogin(value:FormGroup){
 console.log(this.sellerloginform.value)
  }
  signin:any;
  forsignup(){
  this.signin=false;
  console.log(this.signin)
  }
  forsignin(){
    this.signin=true;
  }
  ngOnInit(): void {
    this.forsignup();
    
  }

}
