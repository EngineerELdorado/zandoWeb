import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from 'src/app/product/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFireDatabase) { }
  
  
    getAll(){
      return this.db.list<Product>("products", ref=>ref.limitToLast(100));
    }
    getOne(id){
      return this.db.object<Product>("products/"+id);
    }
    getByCategory(id){
     return this.db.list<Product>("products", ref=>ref.orderByChild("category_id").equalTo(id).limitToLast(20));
    }

    getByCityId(id){
      return this.db.list<Product>("products", ref=>ref.orderByChild("city_id").equalTo(id).limitToLast(20));
    }

    getByAreaId(id){
      return this.db.list<Product>("products", ref=>ref.orderByChild("area_id").equalTo(id).limitToLast(20));
    }
  
}
