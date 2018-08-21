import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/Product';
import { ProductService } from 'src/app/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  product:Product
  constructor(
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
     private productService:ProductService) { }

  ngOnInit() {
    this.spinner.show();
    this.activatedRoute.params.subscribe(params=>{
         this.productId=params["id"];
         this.getProduct();
    })
  }

  getProduct(){
    this.productService.getOne(this.productId).valueChanges().subscribe(res=>{
      this.product=res;
      console.log(this.product)
      this.spinner.hide();
    },err=>{
   this.spinner.hide();
   console.log(err)
    })
  }

}
