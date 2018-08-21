import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { City } from 'src/app/city/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private db: AngularFireDatabase) { }

  getCities(){
    return this.db.list<City>("cities");
  }
}
