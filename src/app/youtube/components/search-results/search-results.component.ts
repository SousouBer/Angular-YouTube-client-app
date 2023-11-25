import {
    Component, OnDestroy, OnInit, Output
} from "@angular/core";
import {
    debounceTime, distinctUntilChanged, filter, map, Observable, Subscription, switchMap
} from "rxjs";
import { ItemsService } from "src/app/core/services/items.service";

import { SearchItem } from "../../models/search-item.model";
import { ResponseItem } from "../../models/search-response.model";
import { Store } from "@ngrx/store";
// import { selectItems } from "src/app/store/selectors/selectors";
import { AppState } from "src/app/store/reducers/reducers";
import { selectYoutubeItems } from "src/app/store/selectors/selectors";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnDestroy {
    MockResponse!: ResponseItem;

    // @Output() SearchItems: SearchItem[] = this.store.select(selectItems);
    // @Output() SearchItems!: Observable<SearchItem[]>;
    

    data!: Subscription;
    words!: Subscription;
    viewAscending!: Subscription;
    likesIsAscending!: Subscription;
    filter = "";
    sub!: Subscription;

    headerData = this.itemsService.searchItemText;

    searchItems: SearchItem[] = [];
    searchItems$!: Observable<SearchItem[]>;

    constructor(private itemsService: ItemsService, private store: Store<AppState>) {
      this.searchItems$ = this.store.select(selectYoutubeItems);
    }

    ngOnInit(): void {
        // this.data = this.searchItems$.subscribe((resData) => {
        //     this.searchItems = resData;
        // });

    //     this.sub = this.headerData
    //         .pipe(
    //             map((typedValue) => typedValue.trim()),
    //             filter((value) => value.length > 3),
    //             debounceTime(1000),
    //             distinctUntilChanged(),
    //             switchMap((query) => this.itemsService.getVideoIds(query)),
    //             switchMap((videoIds) => this.itemsService.getVideos(videoIds))
    //         )
    //         .subscribe((videoDataArray) => this.itemsService.updateData(<SearchItem[]>videoDataArray));

        this.words = this.itemsService.getWords().subscribe((words) => {
            this.filter = words;
        });

        this.viewAscending = this.itemsService.viewsIsAscending.subscribe(
            (value) => {
                if (value) {
                    // Pass a copy of the array in order to trigger the change detection and
                    //  have the UI updated.
                    const res = this.itemsService.sortAscending(this.searchItems.slice());
                    this.itemsService.updateData(res);
                } else {
                    const res = this.itemsService.sortDescending(
                        this.searchItems.slice()
                    );
                    this.itemsService.updateData(res);
                }
            }
        );

        this.likesIsAscending = this.itemsService.likesIsAscending.subscribe(
            (value) => {
                if (value) {
                    const res = this.itemsService.sortByLikesAscending(
                        this.searchItems.slice()
                    );
                    this.itemsService.updateData(res);
                } else {
                    const res = this.itemsService.sortByLikesDescending(
                        this.searchItems.slice()
                    );
                    this.itemsService.updateData(res);
                }
            }
        );
    }

    ngOnDestroy(): void {
        // this.data.unsubscribe();
        this.words.unsubscribe();
        // this.viewAscending.unsubscribe();
        // this.likesIsAscending.unsubscribe();
        // this.sub.unsubscribe();
    }
}
