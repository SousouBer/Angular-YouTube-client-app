import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app-state.model";
import { selectFavouriteItems } from "src/app/store/selectors/selectors";

import { SearchItem } from "../../models/search-item.model";

@Component({
    selector: "app-favourite-page",
    templateUrl: "./favourite-page.component.html",
    styleUrls: ["./favourite-page.component.scss"]
})
export class FavouritePageComponent {
    favItems$!: Observable<SearchItem[]>;

    constructor(private store: Store<AppState>) {
        this.favItems$ = this.store.select(selectFavouriteItems);
    }
}
