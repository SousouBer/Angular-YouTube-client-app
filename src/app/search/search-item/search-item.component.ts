import { Component, OnInit, Input } from "@angular/core";
import { SearchItem } from "../search-item.model";

@Component({
    selector: "app-search-item",
    templateUrl: "./search-item.component.html",
    styleUrls: ["./search-item.component.scss"]
})
export class SearchItemComponent implements OnInit {
    @Input('searchItem') searchItemProps!: SearchItem;
    videoThumbnail!: string;

    ngOnInit(): void {
      this.videoThumbnail = this.searchItemProps.snippet.thumbnails.default.url;
      console.log(this.searchItemProps);
    }
}
