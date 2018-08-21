import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Category } from 'src/app/category/Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories:Category[];
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.categoryService.getAll().valueChanges().subscribe(res=>{
    this.categories=res
    console.log(this.categories)
    }, err=>{
      console.log(err)
    })
  }

}
