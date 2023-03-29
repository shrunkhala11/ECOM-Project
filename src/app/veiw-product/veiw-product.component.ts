import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/product.service';
@Component({
  selector: 'app-veiw-product',
  templateUrl: './veiw-product.component.html',
  styleUrls: ['./veiw-product.component.css']
})
export class VeiwProductComponent implements OnInit {
Productdetail:any;
proID:number
  constructor(private  route:ActivatedRoute, private user:ProductService) { 
    this.route.params.subscribe((res)=>{
      this.proID=res.id;
      console.log(res);
    });
    this.user.getProdcutbyid(this.proID).subscribe((res:any)=>{
      this.Productdetail=res;
      console.log("Product details ", this.Productdetail)
    })
  }

  ngOnInit(): void {
  }

}
