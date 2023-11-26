import { Component } from "@angular/core";
import * as Actions from "../../../store/actions/actions"

import { ItemsService } from "../../services/items.service";
import { AppState } from "src/app/store/reducers/reducers";
import { Store } from "@ngrx/store";

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
        // this.store.dispatch(Actions.filterByDate({ value: this.isAscending }))

        this.itemsService.dateIsAscending.next(this.isAscending);
    }

    filterByViews() {
        this.viewIsAscending = !this.viewIsAscending;
        // this.store.dispatch(Actions.sortByLikes({ value: this.likesIsAscending }))


        this.itemsService.viewIsAscending.next(this.viewIsAscending);
    }
}
