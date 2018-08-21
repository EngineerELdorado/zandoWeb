import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/Product';
import { ProductService } from 'src/app/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/category/Category';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/city/City';
import { AreaService } from 'src/app/area.service';
import { Area } from 'src/app/area/Area';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private cityService:CityService,
    private areaService:AreaService,
    private spinner: NgxSpinnerService) { }
  products:Product[];
  categories:Category[];
  private cities:City[];
  townSelected:boolean;
  areaSelected:boolean;
  areas:Area[];
  @ViewChild("citySelectedModal")citySelectedModal;
  @ViewChild("areaSelectedModal")areaSelectedModal;
  catName="Vous pouvez trier les produits par Categorie";
  cityName="Vous pouvez trier les produits par Ville...";
  areaName="Vous pouvez trier les produits par Quartier";
  ngOnInit() {
    this.spinner.show();

    this.getProducts();
    this.getCategories();
    this.getcities();
    
  }

  getProducts(){
    this.townSelected=false;
    this.areaSelected=false;
     this.productService.getAll().valueChanges().subscribe((res)=>{
       this.products=res.reverse();
       this.spinner.hide()
     }, (err)=>{
      this.spinner.hide()
       console.log("error occured "+err)
     },()=>{
       console.log("request was successful")
     })
  }

  getCategories(){
    this.categoryService.getAll().valueChanges().subscribe(res=>{
    this.categories=res
    console.log(this.categories)
    }, err=>{
      console.log(err)
    })
  }

  getProductsByCategoryId(id, name){
     this.catName="Trier seulement les : "+name;
     if(this.townSelected && !this.areaSelected){
       this.citySelectedModal.show();
     }
     else if(this.townSelected && this.areaSelected){
      this.areaSelectedModal.show();
    }
    else{
      //this.spinner.show();
      this.productService.getByCategory(id).valueChanges().subscribe(res=>{
        this.spinner.hide();
        this.products=res;
      }, err=>{
        this.spinner.hide();
      })
    }
     

  }

  getcities(){
    this.cityService.getCities().valueChanges().subscribe(res=>{
     this.cities=res;
     console.log(this.cities)
    },err=>{
      console.log(err)
    })
  }

  getAreas(){
    this.areaService.getAllAreas().valueChanges().subscribe(res=>{
      this.areas = res
    })
  }
  getProductByCityId(id, name){
    this.cityName="Trier seulement les produits de  "+name;
    this.areaService.getAreasByCityId(id).valueChanges().subscribe(res=>{
      this.areas=res
    })
    this.productService.getByCityId(id).valueChanges().subscribe(res=>{
      this.products=res
    })
  }

  getProductsByAreaId(id,name){
    this.areaName="Trier seulement les produits de "+name;
      this.areaSelected=true;
      this.productService.getByAreaId(id).valueChanges().subscribe(res=>{
        this.products=res
      })
    }
}