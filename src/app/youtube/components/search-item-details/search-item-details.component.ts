import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { ItemsService } from "src/app/core/services/items.service";

import { SearchItem } from "../../models/search-item.model";
import { Store } from "@ngrx/store";
import { selectYoutubeItems } from "src/app/store/selectors/selectors";
import { AppState } from "src/app/store/app-state.model";

@Component({
    selector: "app-search-item-details",
    templateUrl: "./search-item-details.component.html",
    styleUrls: ["./search-item-details.component.scss"]
})
export class SearchItemDetailsComponent implements OnInit, OnDestroy {
    id = "";
    itemObject!: SearchItem;
    // recieveSearchItems!: Subscription;
    recieveSearchItems$!: Observable<SearchItem[]>;
    sub!: Subscription;

    constructor(private itemsService: ItemsService, private route: ActivatedRoute, private store: Store<AppState>) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params["id"];
        });

        this.recieveSearchItems$ = this.store.select(selectYoutubeItems);

        this.sub = this.recieveSearchItems$.subscribe((items) => {
            const item = items.find((item) => item.id === this.id);
            this.itemObject = item as SearchItem;
        });



        console.log(this.itemObject);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
