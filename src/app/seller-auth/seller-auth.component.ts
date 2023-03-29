import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import login, { Signup } from '../core/datatype';
import { SellerService } from '../core/seller.service';

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
  constructor(private userseller:SellerService,private route:Router) { }
  SellerSignUp(value:Signup){
    //  console.log(this.sellersignupform.value)
     this.userseller.saveseller(this.sellersignupform.value).subscribe((res)=>{
      console.log("save seller",res)
      localStorage.setItem('seller',JSON.stringify(res));
      this.route.navigate(['/list'])
     })
  }
  
  sellerlogin(value:login){
      console.log(this.sellerloginform.value)
       this.userseller.signinseller(this.sellerloginform.value).subscribe((res:any)=>{
            console.log("sign in",res);
            this.route.navigate(['/list'])
  //         if(res && res.body && res.body.length===1){
  //   localStorage.setItem('seller',JSON.stringify(res.body));
  //   this.route.navigate(['/list'])

  // }else{
  //     // Swal.fire("emailid and Password is incorrect")
  // }
})
     
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
