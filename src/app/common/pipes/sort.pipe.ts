import { Pipe, PipeTransform } from '@angular/core';
import { ITrettonColleague } from '../services/tretton-colleagues/tretton-colleague.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: Array<any>, args?: any): Array<any> {
    return array.sort((a, b) => {
      if (a[args.sortBy] < b[args.sortBy]) {
        return -1 * args.order;
      }
      else if (a[args.sortBy] > b[args.sortBy]) {
        return 1 * args.order;
      }
      else {
        return 0;
      }
    });
  }
}
