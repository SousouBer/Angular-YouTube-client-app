import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ItemsService } from "src/app/core/services/items.service";

import { SearchItem } from "../../models/search-item.model";

@Component({
    selector: "app-search-item-details",
    templateUrl: "./search-item-details.component.html",
    styleUrls: ["./search-item-details.component.scss"]
})
export class SearchItemDetailsComponent implements OnInit, OnDestroy {
    id = "";
    itemObject!: SearchItem;
    recieveSearchItems!: Subscription;

    constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params["id"];
        });

        this.recieveSearchItems = this.itemsService.itemsData.subscribe((items) => {
            const item = items.find((item) => item.id === this.id);
            this.itemObject = item as SearchItem;
        });
    }

    ngOnDestroy(): void {
        this.recieveSearchItems.unsubscribe();
    }
}
