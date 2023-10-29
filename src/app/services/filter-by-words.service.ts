import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { SearchItem } from "../search/search-item.model";
import { ResponseItem } from "../search/search-response.model";

@Injectable({
    providedIn: "root",
})
export class FilterByWordsService {
    filteringWords = new BehaviorSubject<string>("");
    viewsIsAscending = new BehaviorSubject<boolean>(false);
    itemsData = new BehaviorSubject<SearchItem[]>([]);

    data = this.itemsData.asObservable();

    constructor(private http: HttpClient) {
        this.http
            .get<ResponseItem>("../assets/mock.response.json")
            .subscribe((response) => {
                this.itemsData.next(response.items);
            });
    }

    updateData(value: SearchItem[]) {
        this.itemsData.next(value);
        console.log(this.data);
    }

    updateValue(newValue: string) {
        this.filteringWords.next(newValue);
    }

    getWords() {
        return this.filteringWords.asObservable();
    }

    // Sort data using 'Views' button from another component
    updateViewsBoolean(newValue: boolean) {
        this.viewsIsAscending.next(newValue);
    }

    sortAscending(data: SearchItem[]) {
        return data.sort(
            (a: SearchItem, b: SearchItem) => Number(new Date(a.snippet.publishedAt))
        - Number(new Date(b.snippet.publishedAt))
        );
    }

    sortDescending(data: SearchItem[]) {
        return data.sort(
            (a: SearchItem, b: SearchItem) => Number(new Date(b.snippet.publishedAt))
        - Number(new Date(a.snippet.publishedAt))
        );
    }
}
