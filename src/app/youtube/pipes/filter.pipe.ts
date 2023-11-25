import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filterItems',
})
export class FilterPipe implements PipeTransform {
  transform(value: SearchItem[] | null, filterByWords: string) {
    if (!value) {
      return [];
    }
    const finalResult: SearchItem[] = [];

    for (const item of value) {
      const itemTitle = item.snippet.title.toLowerCase();

      if (itemTitle.includes(filterByWords.toLowerCase())) {
        finalResult.push(item);
      }
    }
    return finalResult;
  }
}
