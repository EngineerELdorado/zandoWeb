import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

 private cityId = new BehaviorSubject<any>(0)
 private areaId = new BehaviorSubject<any>(0)
 cityIdObs = this.cityId.asObservable();
 areaIdObs = this.areaId.asObservable();
  constructor() { }

  setCityId(id){
    this.cityId.next(id);
  }

  setAreaId(id){
    this.areaId.next(id);
  }

}
