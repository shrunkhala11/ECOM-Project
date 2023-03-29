import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  type:string='normal';
  sellername:any;
  sellerdata:any;
  sellerstore:any;
  constructor(private Router:Router) { }
  logout(){
    localStorage.clear();
    this.Router.navigate(['/']);
    this.type='normal';
  }

  ngOnInit(): void {
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
        }else{
          this.type='normal'
        }
      }
    })
  }
}