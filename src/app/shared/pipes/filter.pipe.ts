import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: any) {
    if (!items || !value || value === 'All') return items;

    return items.filter(
      item => item[field].indexOf(value) !== -1
    );
  }
}
