import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Products } from '../core/datatype';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  Addproduct:FormGroup=new FormGroup({
      name:new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
      category:new FormControl('',Validators.required) ,
      color:new FormControl('',Validators.required) ,
      description:new FormControl('',Validators.required) ,
      image:new FormControl('',Validators.required)
  })
  constructor(private user:ProductService) { }
  addproduct(value:FormGroup){
    // console.log(this.Addproduct.value)
    this.user.saveproduct(this.Addproduct.value).subscribe((res)=>{
      Swal.fire('Save','Product save','success')
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
