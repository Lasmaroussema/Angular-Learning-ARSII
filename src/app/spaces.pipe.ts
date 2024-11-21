import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space',
   standalone: true
})
export class SpacesPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
