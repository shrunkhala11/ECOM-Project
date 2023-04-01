import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  type:string='normal';
  sellername:any;
  username:any;
  sellerdata:any;
  sellerstore:any;
  datafrominput:any;
  constructor(private Router:Router,private user:ProductService) {
     this.Router.events.subscribe((res:any)=>{
      console.log("responce for route",res.url);
      if(res.url){
        console.log("url",res.url);
        if(localStorage.getItem('seller')&& res.url.includes('seller')){
             console.log("this is seller");
             this.sellerdata=localStorage.getItem('seller');
             console.log("data form locaal",this.sellerdata)
             this.sellerstore=JSON.parse(this.sellerdata)[0]
             console.log("sellerstore",this.sellerstore)
            this.sellername=this.sellerstore.name
             console.log("seller name",this.sellername)
             this.type='seller' ;
        }if(localStorage.getItem('user')&& res.url.includes('user')){
          console.log("this is user");
             this.sellerdata=localStorage.getItem('user');
             console.log("data form locaal",this.sellerdata)
             this.sellerstore=JSON.parse(this.sellerdata)[0]
             console.log("sellerstore",this.sellerstore)
            this.username=this.sellerstore.name
             console.log("user name",this.username)
             this.type='user' ;
        }else{
          this.type='normal'
        }
      }
    })
   }
  logout(){
    localStorage.clear();
    this.Router.navigate(['/']);
    this.type='normal';
  }
  similarproducts:any;
  //in input when we keyup then according to value give related product
  serchrelatedproduct(data:any){
       this.datafrominput=data.target.value;
       this.user.searchingProducts(this.datafrominput).subscribe((res)=>{
        // console.log(res)
        this.similarproducts=res;
        console.log("similarproducts",this.similarproducts)
       })
  }
  //on serch button serch product 
  OnSerchproduct(value:string){
      console.log("search value",value)
      this.Router.navigate([`search/${value}`])
  }
  ngOnInit(): void {
   
  }
}