import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Products } from '../core/datatype';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  Updateproduct:FormGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    category:new FormControl('',Validators.required) ,
    color:new FormControl('',Validators.required) ,
    description:new FormControl('',Validators.required) ,
    image:new FormControl('',Validators.required)
})
  allProducts:any;
  ProductID:any;

  constructor(private user:ProductService,private Route:ActivatedRoute,private rouer:Router) {
    this.Route.params.subscribe((res)=>{
      this.ProductID=res.id;
      console.log("responve form parma",this.ProductID);
    })
    this.user.getProdcutbyid(this.ProductID).subscribe((Res)=>{
       this.allProducts=Res;
       console.log("all product form get by id",this.allProducts);
       this.Updateproduct.setValue(Res)
    })
   }
   updateproduct(value:FormGroup){
    this.user.updateproduct(this.Updateproduct.value.id,this.Updateproduct.value).subscribe((res)=>{
      Swal.fire("Data Updated"," Successfulyy updated")
     this.rouer.navigate(['/list'])
    })
  }
  ngOnInit(): void {
  }

}
