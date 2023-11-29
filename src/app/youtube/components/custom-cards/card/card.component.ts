import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { removeCard } from "src/app/store/actions/custom-card.actions";
import { AppState } from "src/app/store/app-state.model";
import { CustomCard } from "src/app/youtube/models/custom-card.model";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"]
})
export class CardComponent {
    @Input() card!: CustomCard;

    constructor(private store: Store<AppState>) { }

    onRemoveCard() {
        this.store.dispatch(removeCard({ id: this.card.id }));
    }
}
