import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SearchItem } from '../../youtube/models/search-item.model';
import { ResponseItem } from '../../youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  filteringWords = new BehaviorSubject<string>('');
  viewsIsAscending = new BehaviorSubject<boolean>(false);
  likesIsAscending = new BehaviorSubject<boolean>(false);
  itemsData = new BehaviorSubject<SearchItem[]>([]);

  data = this.itemsData.asObservable();

  constructor(private http: HttpClient) {
    this.http
      .get<ResponseItem>('../assets/mock.response.json')
      .subscribe((response) => {
        this.itemsData.next(response.items);
      });
  }

  updateData(updateData: SearchItem[]) {
    this.itemsData.next(updateData);
  }

  updateValue(updatedValue: string) {
    this.filteringWords.next(updatedValue);
  }

  getWords() {
    return this.filteringWords.asObservable();
  }

  // Sort data using 'Views' button from another component
  updateViewsBoolean(updatedValue: boolean) {
    this.viewsIsAscending.next(updatedValue);
  }

  sortAscending(data: SearchItem[]) {
    return data.sort(
      (a: SearchItem, b: SearchItem) =>
        Number(new Date(a.snippet.publishedAt)) -
        Number(new Date(b.snippet.publishedAt))
    );
  }

  sortDescending(data: SearchItem[]) {
    return data.sort(
      (a: SearchItem, b: SearchItem) =>
        Number(new Date(b.snippet.publishedAt)) -
        Number(new Date(a.snippet.publishedAt))
    );
  }

  sortByLikesAscending(data: SearchItem[]) {
    return data.sort(
      (a: SearchItem, b: SearchItem) =>
        Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
    );
  }

  sortByLikesDescending(data: SearchItem[]) {
    return data.sort(
      (a: SearchItem, b: SearchItem) =>
        Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
    );
  }
}
