import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
AllProducts:any;
  constructor(private user:ProductService) {
    this.user.getallProduct().subscribe((res)=>{
      this.AllProducts=res;
      console.log(res);
    })
   }
   
  ngOnInit(): void {
  }

}
