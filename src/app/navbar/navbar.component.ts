import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  type:string="normal";
  constructor(private Router:Router) { }

  ngOnInit(): void {
    this.Router.events.subscribe((res:any)=>{
      console.log(res.url);
      if(res.url){
        console.log(res.url);
        if(localStorage.getItem('seller')&& res.url.includes('seller')){
             console.log("this is seller");
             this.type="seller" 
        }
      }

    })
  }

}
