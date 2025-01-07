import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {

  transform(value: string, args?:string): unknown {

    if(args === 'upper') {
      return value.toUpperCase();
    }

    if(args === 'lower') {
      return value.toLowerCase();
    }

    return value;
  }

}
