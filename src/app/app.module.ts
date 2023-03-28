import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UpdateProductComponent } from './update-product/update-product.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SellerAuthComponent,
    AddProductComponent,
    ProductlistComponent,
    SellerhomeComponent,
    UserAuthComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
