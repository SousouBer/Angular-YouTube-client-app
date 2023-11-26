import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortByDate',
})
export class DateSortPipe implements PipeTransform {
  transform(value: SearchItem[] | null, dateAscending: boolean | null) {
    if (value === null || dateAscending === null) {
      return value;
    }

    const sortedResult: SearchItem[] = [...(value as SearchItem[])];

    if (dateAscending) {
      sortedResult.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(new Date(a.snippet.publishedAt)) -
          Number(new Date(b.snippet.publishedAt))
      );
    } else if (!dateAscending) {
      sortedResult.sort(
        (a: SearchItem, b: SearchItem) =>
          Number(new Date(b.snippet.publishedAt)) -
          Number(new Date(a.snippet.publishedAt))
      );
    }

    return sortedResult;
  }
}
