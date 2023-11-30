import { Pipe, PipeTransform } from "@angular/core";

import { CustomCard } from "../models/custom-card.model";
import { SearchItem } from "../models/search-item.model";

@Pipe({
    name: "sortByDate",
})
export class DateSortPipe implements PipeTransform {
    transform(value: (CustomCard | SearchItem)[] | null, dateAscending: boolean | null) {
        if (value === null || dateAscending === null) {
            return value;
        }

        const customCards = value.filter((card) => (<CustomCard>card).description);
        const youtubeItems = value.filter((item) => (<SearchItem>item).snippet);

        let sortedResult: (SearchItem | CustomCard)[] = [];

        if (dateAscending) {
            (<SearchItem[]>youtubeItems).sort(
                (a: SearchItem, b: SearchItem) => Number(new Date(a.snippet.publishedAt))
          - Number(new Date(b.snippet.publishedAt))
            );
        } else if (!dateAscending) {
            (<SearchItem[]>youtubeItems).sort(
                (a: SearchItem, b: SearchItem) => Number(new Date(b.snippet.publishedAt))
          - Number(new Date(a.snippet.publishedAt))
            );
        }

        return sortedResult = [...customCards, ...youtubeItems];
    }
}
