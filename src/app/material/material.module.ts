import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
const MaterialComponenet=[
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule
  
]



@NgModule({
  exports: [MaterialComponenet],
  imports: [
    CommonModule,
    MaterialComponenet

  ]
})
export class MaterialModule { }
