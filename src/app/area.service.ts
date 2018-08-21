import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Area } from 'src/app/area/Area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private db: AngularFireDatabase) { }

  getAllAreas(){
    return this.db.list<Area>("areas")
  }

  getAreasByCityId(id){
    return this.db.list<Area>("areas", ref=>ref.orderByChild("city_id").equalTo(id));
  }
}
