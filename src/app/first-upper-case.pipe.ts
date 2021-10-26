import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpperCase'
})
export class FirstUpperCasePipe implements PipeTransform {

  transform(value: any, pos: any): any {

    return value.substring(0,pos).toUpperCase()+value.substring(pos,value.lentgh).toLowerCase();
  }

}
