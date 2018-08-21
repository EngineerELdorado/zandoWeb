import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Category } from 'src/app/category/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list<Category>("categories");
  }
}
