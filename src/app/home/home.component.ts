import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 Productsforsilder:any;
  constructor(private userpro:ProductService) { 
    this.userpro.getallProduct().subscribe((res)=>{
         this.Productsforsilder=res;
         console.log(this.Productsforsilder)
    })
  }
  
  ngOnInit(): void {
  }

}
