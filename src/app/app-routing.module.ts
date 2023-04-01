import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { VeiwProductComponent } from './veiw-product/veiw-product.component';
import { SerchComponent } from './serch/serch.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'seller',component:SellerAuthComponent},
  {path:'selleraddproduct',component:AddProductComponent},
  {path:'sellerlist',component:ProductlistComponent},
  {path:'sellerhome',component:SellerhomeComponent},
  {path:'user',component:UserAuthComponent},
  {path:'sellerupdateproduct/:id',component:UpdateProductComponent},
  {path:'veiw/:id',component:VeiwProductComponent},
  {path:'search/:value',component:SerchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
