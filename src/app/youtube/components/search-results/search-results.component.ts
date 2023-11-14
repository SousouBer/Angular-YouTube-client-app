import {
    Component, OnDestroy, OnInit, Output
} from "@angular/core";
import {
    debounceTime, distinctUntilChanged, filter, map, Subscription, switchMap
} from "rxjs";
import { ItemsService } from "src/app/core/services/items.service";

import { SearchItem } from "../../models/search-item.model";
import { ResponseItem } from "../../models/search-response.model";

@Component({
    selector: "app-search-results",
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
    MockResponse!: ResponseItem;

    @Output() SearchItems: SearchItem[] = [];

    data!: Subscription;
    words!: Subscription;
    viewAscending!: Subscription;
    likesIsAscending!: Subscription;
    filter = "";
    sub!: Subscription;

    headerData = this.itemsService.searchItemText;

    constructor(private itemsService: ItemsService) {}

    ngOnInit(): void {
        this.data = this.itemsService.data.subscribe((resData) => {
            this.SearchItems = resData;
        });

        this.sub = this.headerData
            .pipe(
                map((typedValue) => typedValue.trim()),
                filter((value) => value.length > 3),
                debounceTime(1000),
                distinctUntilChanged(),
                switchMap((query) => this.itemsService.getVideoIds(query)),
                switchMap((videoIds) => this.itemsService.getVideos(videoIds))
            )
            .subscribe((videoDataArray) => this.itemsService.updateData(<SearchItem[]>videoDataArray));

        this.words = this.itemsService.getWords().subscribe((words) => {
            this.filter = words;
        });

        this.viewAscending = this.itemsService.viewsIsAscending.subscribe(
            (value) => {
                if (value) {
                    // Pass a copy of the array in order to trigger the change detection and
                    //  have the UI updated.
                    const res = this.itemsService.sortAscending(this.SearchItems.slice());
                    this.itemsService.updateData(res);
                } else {
                    const res = this.itemsService.sortDescending(
                        this.SearchItems.slice()
                    );
                    this.itemsService.updateData(res);
                }
            }
        );

        this.likesIsAscending = this.itemsService.likesIsAscending.subscribe(
            (value) => {
                if (value) {
                    const res = this.itemsService.sortByLikesAscending(
                        this.SearchItems.slice()
                    );
                    this.itemsService.updateData(res);
                } else {
                    const res = this.itemsService.sortByLikesDescending(
                        this.SearchItems.slice()
                    );
                    this.itemsService.updateData(res);
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.data.unsubscribe();
        this.words.unsubscribe();
        this.viewAscending.unsubscribe();
        this.likesIsAscending.unsubscribe();
        this.sub.unsubscribe();
    }
}
