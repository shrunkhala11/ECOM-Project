import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller',component:SellerAuthComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'list',component:ProductlistComponent},
  {path:'sellerhome',component:SellerhomeComponent},
  {path:'user',component:UserAuthComponent},
  {path:'updateproduct/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
