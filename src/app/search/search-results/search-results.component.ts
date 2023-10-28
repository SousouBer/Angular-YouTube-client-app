import { Component, OnInit, Output } from "@angular/core";
import { SearchItem } from "../search-item.model";
import { ResponseItem } from "../search-response.model";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  MockResponse!: ResponseItem;
  @Output() SearchItems!: SearchItem[];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<ResponseItem>('/assets/mock.response.json').subscribe(data => {
      this.MockResponse = data;
      this.SearchItems = data.items;
    });
  }
}
