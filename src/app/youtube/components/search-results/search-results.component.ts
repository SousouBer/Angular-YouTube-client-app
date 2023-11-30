import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { ItemsService } from "src/app/core/services/items.service";
import { decreaseCurrentPage, updateCurrentPage } from "src/app/store/actions/current-page.actions";
import { AppState } from "src/app/store/app-state.model";
import { getCurrentPage, selectCurrentPageItems, selectTotalPageCount } from "src/app/store/selectors/selectors";

import { CustomCard } from "../../models/custom-card.model";
import { SearchItem } from "../../models/search-item.model";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
    searchItems$!: Observable<(CustomCard | SearchItem)[]>;

    currentPage$!: Observable<number>;
    pagesCount$!: Observable<number>;

    words!: Subscription;
    dateAscending!: Subscription;
    viewIsAscending!: Subscription;

    dateBoolean$: boolean | null = null;
    viewBoolean$: boolean | null = null;
    filter = "";

    constructor(
        private itemsService: ItemsService,
        private store: Store<AppState>
    ) {
        this.searchItems$ = this.store.select(selectCurrentPageItems);
    }

    ngOnInit(): void {
        this.words = this.itemsService.getWords().subscribe((words) => {
            this.filter = words;
        });

        this.dateAscending = this.itemsService.dateStream$.subscribe((value) => {
            this.dateBoolean$ = value;
        });

        this.viewIsAscending = this.itemsService.viewIsAscending.subscribe(
            (value) => {
                this.viewBoolean$ = value;
            }
        );
        this.currentPage$ = this.store.select(getCurrentPage);
        this.pagesCount$ = this.store.select(selectTotalPageCount);
    }

    isCustomCard(item: CustomCard | SearchItem): item is CustomCard {
        const res = (item as CustomCard).creationDate !== undefined;
        return res;
    }

    nextPage() {
        this.store.dispatch(updateCurrentPage());
    }

    previousPage() {
        this.store.dispatch(decreaseCurrentPage());
    }

    ngOnDestroy(): void {
        this.words.unsubscribe();
        this.dateAscending.unsubscribe();
        this.viewIsAscending.unsubscribe();
    }
}
