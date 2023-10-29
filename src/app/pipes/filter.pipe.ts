import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/search/search-item.model';
import { FilterByWordsService } from '../services/filter-by-words.service';

@Pipe({
  name: 'filterItems',
})
export class FilterPipe implements PipeTransform {
  constructor(private filter: FilterByWordsService){}

  transform(value: SearchItem[], filterByWords: string) {
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
