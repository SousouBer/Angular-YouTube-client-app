import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output } from "@angular/core";
import { FilterByWordsService } from "src/app/services/filter-by-words.service";

import { SearchItem } from "../search-item.model";
import { ResponseItem } from "../search-response.model";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
    MockResponse!: ResponseItem;
    @Output() SearchItems!: SearchItem[];

    filter = "";

    constructor(private http: HttpClient, private filterWords: FilterByWordsService) {}

    ngOnInit(): void {
        this.filterWords.data.subscribe((data) => {
            this.SearchItems = data;
        });

        this.filterWords.getWords().subscribe((words) => {
            this.filter = words;
        });

        this.filterWords.viewsIsAscending.subscribe((value) => {
            if (value) {
                const res = this.filterWords.sortAscending(this.SearchItems.slice());
                this.filterWords.updateData(res);
            } else {
                const res = this.filterWords.sortDescending(this.SearchItems.slice());
                this.filterWords.updateData(res);
            }
        });
    }
}
