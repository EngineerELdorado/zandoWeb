import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateProductComponent } from './create-product/create-product.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },{
    path:'product/:id',
    component:ProductDetailsComponent
  },
  {
    path:'create-product',
    component:CreateProductComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
