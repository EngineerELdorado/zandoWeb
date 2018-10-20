import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/category/Category';
import { CityService } from 'src/app/city.service';
import { City } from 'src/app/city/City';
import { AreaService } from 'src/app/area.service';
import { Area } from 'src/app/area/Area';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubjectServiceService } from 'src/app/subject-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories:Category[];
  private cities:City[];
  townSelected:boolean;
  areaSelected:boolean;
  areas:Area[];
  @ViewChild("citySelectedModal")citySelectedModal;
  @ViewChild("areaSelectedModal")areaSelectedModal;
  catName="Categories.....";
  cityName="Villes......";
  areaName="Quartiers......";
  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private cityService:CityService,
    private areaService:AreaService,
    private subjectService:SubjectServiceService,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.getAll();
    this.getCategories();
  this.getcities();
  }

  
  getAll(){
    this.categoryService.getAll().valueChanges().subscribe(res=>{
    this.categories=res
    console.log(this.categories)
    }, err=>{
      console.log(err)
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
    this.cityName=name;
    this.subjectService.setCityId(id);
    this.subjectService.setAreaId(0);
    this.areaService.getAreasByCityId(id).valueChanges().subscribe(res=>{
      this.areas=res
    })
    
  }

  getProductsByAreaId(id,name){
    this.areaName=name;
    this.subjectService.setAreaId(id);
      this.areaSelected=true;
      
    }

}
