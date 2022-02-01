import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => this.searchItem(item, filter));
  }

  searchItem(item: any, filter: string): boolean {
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        if (typeof (value === 'string') && new RegExp(filter, 'gi').test(value)) {
          return true;
        } else if (typeof value === 'object' && this.searchItem(value, filter)) {
          return true;
        }
      }
    }
    return false;
  }
}
