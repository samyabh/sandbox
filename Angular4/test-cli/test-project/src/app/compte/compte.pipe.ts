import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compte'
})
export class ComptePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return ' - ' + value + ' - ';
  }

}
