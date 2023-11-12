import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  private apiKey = 'AIzaSyDCTkLFEuwj1gxGyjOzRuaAxkaI_UYWRdE';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  searchItemText = new Subject<string>();;

  getVideoIds(query: string) {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('q', query)
      .set('maxResults', '10')
      .set('key', this.apiKey);

      return this.http.get<any>(`${this.apiUrl}/search`, { params }).pipe(map(res => res.items.map((item: { id: { videoId: any; }; }) => item.id.videoId)), map(array => array.join(',')));
  }

  getVideos(ids: string) {
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', ids)
      .set('key', this.apiKey);

      return this.http.get<ResponseItem>(`${this.apiUrl}/videos`, { params }).pipe(map(res => res.items))
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
