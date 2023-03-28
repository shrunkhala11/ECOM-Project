import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 Productsforsilder:any;
 allProducts:any;
  constructor(private userpro:ProductService) { 
    this.userpro.getallProduct().subscribe((res)=>{
         this.allProducts=res;
         console.log("all products",this.allProducts)
    });
    this.userpro.getpopularProduct().subscribe((res)=>{
      this.Productsforsilder=res;
      console.log("for silder",this.Productsforsilder)
    })
  }
  
  ngOnInit(): void {
  }

}
