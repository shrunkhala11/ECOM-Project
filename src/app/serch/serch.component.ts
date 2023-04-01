import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../core/datatype';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
datavalue:any;
similarProducts:Products[];
  constructor(private  Activeroute:ActivatedRoute,private user:ProductService) {
    this.Activeroute.params.subscribe((res)=>{
     this.datavalue=res.value;
     console.log(this.datavalue);
    })
    this.user.searchingProducts(this.datavalue).subscribe((res:any)=>{
      // console.log(res)
      this.similarProducts=res;
      console.log("similarproducts detail",this.similarProducts)
     })
   }

  ngOnInit(): void { }

}
