import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app-state.model";

import * as SearchItemActions from "../../../../store/actions/youtube-items.actions";
import { SearchItem } from "../../../models/search-item.model";

@Component({
    selector: "app-search-item",
    templateUrl: "./search-item.component.html",
    styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
    @Input() searchItem!: SearchItem;
    videoThumbnail = "";

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.videoThumbnail = this.searchItem.snippet.thumbnails.medium.url;
    }

    markAsFavourite() {
        this.store.dispatch(SearchItemActions.markFavourite({ id: this.searchItem.id }));
    }

    removeFromFavourite() {
        this.store.dispatch(SearchItemActions.removeFromFavourite({ id: this.searchItem.id }));
    }
}
