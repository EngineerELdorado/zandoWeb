import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subText'
})
export class SubTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value !==undefined && value.length>18){
      return value.substring(0,15)+"..."
    }
    return value;
  }

}
