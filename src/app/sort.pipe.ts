import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string, order: string): any {
    return value.sort((a, b) => {

      let direction = 1;
      if (order === 'DESC') {
        direction = -1;
      }

      if (a[propName] > b[propName]) {
        return (1 * direction);
      } else {
        return (-1 * direction);
      }
    });
  }

}
