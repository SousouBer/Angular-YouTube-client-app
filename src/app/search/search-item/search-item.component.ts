import {
    Component, Input, OnInit
} from "@angular/core";

import { SearchItem } from "../search-item.model";

@Component({
    selector: "app-search-item",
    templateUrl: "./search-item.component.html",
    styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
    @Input() searchItem!: SearchItem;
    videoThumbnail!: string;

    ngOnInit(): void {
        this.videoThumbnail = this.searchItem.snippet.thumbnails.default.url;
    }
}
