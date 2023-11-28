import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { CustomCard } from 'src/app/store/reducers/reducers';

@Pipe({
  name: 'sortbyViews',
})
export class SortbyViewsPipe implements PipeTransform {
  transform(value: (CustomCard | SearchItem)[] | null, viewAscending: boolean | null) {
    if (viewAscending === null) {
      return value;
    }

    const customCards = value?.filter(card => (<CustomCard>card).description);
    const youtubeItems = value?.filter(item => (<SearchItem>item).snippet);

    let sortedResult: (SearchItem | CustomCard)[] = [];

    if (viewAscending) {
      (<SearchItem[]>youtubeItems).sort(
        (a: SearchItem, b: SearchItem) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    } else {
      (<SearchItem[]>youtubeItems).sort(
        (a: SearchItem, b: SearchItem) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      );
    }
    return sortedResult = [...<CustomCard[]>customCards, ...<SearchItem[]>youtubeItems]
  }
}
