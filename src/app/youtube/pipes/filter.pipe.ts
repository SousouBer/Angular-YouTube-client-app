import { Pipe, PipeTransform } from '@angular/core';
import { CustomCard } from 'src/app/store/reducers/reducers';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filterItems',
})
export class FilterPipe implements PipeTransform {
  transform(value: (CustomCard | SearchItem)[] | null, filterByWords: string) {
    if (!value) {
      return [];
    }
    const finalResult: (SearchItem | CustomCard)[] = [];

    for (const item of value) {
      // Simple check to see if the item is of interface CustomCard
      if (!item.hasOwnProperty('description')) {
        const itemTitle = (<SearchItem>item)?.snippet?.title.toLowerCase();

        if (itemTitle.includes(filterByWords.toLowerCase())) {
          finalResult.push(<SearchItem>item);
        }
      } else {
        finalResult.push(<CustomCard>item);
      }
    }
    return finalResult;
  }
}
