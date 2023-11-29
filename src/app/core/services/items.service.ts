import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    BehaviorSubject, map, Subject
} from "rxjs";

import { SearchItem, SearchItemSnippet } from "../../youtube/models/search-item.model";
import { ResponseItem } from "../../youtube/models/search-response.model";

@Injectable({
    providedIn: "root",
})
export class ItemsService {
    filteringWords = new BehaviorSubject<string>("");

    currentPage = new BehaviorSubject<number>(1);
    getCurrentPage$ = this.currentPage.asObservable();

    pagesCount = new BehaviorSubject<number>(0);
    getPagesCount$ = this.pagesCount.asObservable();

    dateIsAscending = new Subject<boolean | null>();
    dateStream$ = this.dateIsAscending.asObservable();

    viewIsAscending = new Subject<boolean | null>();
    viewStream$ = this.viewIsAscending.asObservable();

    // viewsIsAscending = new BehaviorSubject<boolean | null>(false);
    // likesIsAscending = new BehaviorSubject<boolean>(false);
    // itemsData = new BehaviorSubject<SearchItem[]>([]);

    // data = this.itemsData.asObservable();

    constructor(private http: HttpClient) {}

    private apiKey = "AIzaSyDCTkLFEuwj1gxGyjOzRuaAxkaI_UYWRdE";
    private apiUrl = "https://www.googleapis.com/youtube/v3";

    searchItemText = new Subject<string>();

    getVideoIds(query: string) {
        const params = new HttpParams()
            .set("part", "snippet")
            .set("type", "video")
            .set("q", query)
            .set("maxResults", "50")
            .set("key", this.apiKey);

        return this.http.get<ResponseItem>(`${this.apiUrl}/search`, { params }).pipe(
            map((res) => res.items.map((item) => (<SearchItemSnippet>item).id.videoId)),
            map((array) => array.join(","))
        );
    }

    getVideos(ids: string) {
        const params = new HttpParams()
            .set("part", "snippet,statistics")
            .set("id", ids)
            .set("key", this.apiKey);

        return this.http
            .get<ResponseItem>(`${this.apiUrl}/videos`, { params })
            .pipe(
                map((res) => res.items)
            );
    }

    updateCurrentPage(value: number){
      this.currentPage.next(value);
    }

    updatePagesCount(value: number){
      this.pagesCount.next(value);
    }

    updateValue(updatedValue: string) {
        this.filteringWords.next(updatedValue);
    }

    getWords() {
        return this.filteringWords.asObservable();
    }
}
