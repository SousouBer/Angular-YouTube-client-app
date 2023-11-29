import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app-state.model";

import { ItemsService } from "../../services/items.service";

@Component({
    selector: "app-filtering-criteria",
    templateUrl: "./filtering-criteria.component.html",
    styleUrls: ["./filtering-criteria.component.scss"],
})
export class FilteringCriteriaComponent {
    filterByWords = "";

    isAscending = false;
    viewIsAscending = false;

    constructor(private itemsService: ItemsService, private store: Store<AppState>) {}

    updateValue() {
        this.itemsService.updateValue(this.filterByWords);
    }

    filterByDate() {
        this.isAscending = !this.isAscending;
        this.itemsService.dateIsAscending.next(this.isAscending);
    }

    filterByViews() {
        this.viewIsAscending = !this.viewIsAscending;
        this.itemsService.viewIsAscending.next(this.viewIsAscending);
    }
}
