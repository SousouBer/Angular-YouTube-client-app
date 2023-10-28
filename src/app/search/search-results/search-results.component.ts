import { Component, OnInit, Output } from "@angular/core";
import { SearchItem } from "../search-item.model";
import { ResponseItem } from "../search-response.model";
import { HttpClient } from "@angular/common/http";
import { FilterByWordsService } from "src/app/services/filter-by-words.service";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  MockResponse!: ResponseItem;
  @Output() SearchItems!: SearchItem[];

  filter: string = '';

  constructor(private http: HttpClient, private filterWords: FilterByWordsService){}

  ngOnInit(): void {
    this.http.get<ResponseItem>("/assets/mock.response.json").subscribe(response => {
      this.MockResponse = response;
      this.SearchItems = response.items;
    })

    this.filterWords.getWords().subscribe(words => {
      this.filter = words;
      console.log(this.filter);
    })
  }
}
