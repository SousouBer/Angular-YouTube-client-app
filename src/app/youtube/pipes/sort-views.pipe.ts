import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortbyViews',
})
export class SortbyViewsPipe implements PipeTransform {
  transform(value: SearchItem[] | null, viewAscending: boolean | null) {
    if (viewAscending === null) {
      return value;
    }

    const sortedResult: SearchItem[] = [...(value as SearchItem[])];
    if (viewAscending) {
      sortedResult.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    } else {
      sortedResult.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      );
    }
    return sortedResult;
  }
}
