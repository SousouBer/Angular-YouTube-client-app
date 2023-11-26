import { Component, OnInit } from "@angular/core";
import {
    FormArray, FormControl, FormGroup, Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState, CustomCard } from "src/app/store/reducers/reducers";
import * as SearchItemActions from '../../../store/actions/actions';

@Component({
    selector: "app-admin-page",
    templateUrl: "./admin-page.component.html",
    styleUrls: ["./admin-page.component.scss"],
})
export class AdminPageComponent implements OnInit {
    cardCreationForm!: FormGroup;

    constructor(private store: Store<AppState>){}

    ngOnInit(): void {
        this.cardCreationForm = new FormGroup({
            title: new FormControl(null, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
            ]),
            description: new FormControl(null, Validators.maxLength(255)),
            imgLink: new FormControl(null, Validators.required),
            videoLink: new FormControl(null, Validators.required),
            creationDate: new FormControl(null, [Validators.required, this.validateDate.bind(this)]),
            tags: new FormArray([new FormControl(null, Validators.required)], Validators.maxLength(5))
        });
    }

    get title() {
        return this.cardCreationForm.get("title");
    }

    get description() {
        return this.cardCreationForm.get("description");
    }

    get imgLink() {
        return this.cardCreationForm.get("imgLink");
    }

    get videoLink() {
        return this.cardCreationForm.get("videoLink");
    }

    get creationDate() {
        return this.cardCreationForm.get("creationDate");
    }

    get tags() {
        return <FormArray> this.cardCreationForm.get("tags");
    }

    validateDate(control: FormControl): { [s: string]: boolean } | null {
        const date = control.value;

        if (new Date(date) > new Date()) {
            return { dateIsInValid: true };
        }
        return null;
    }

    onAddTag() {
        (<FormArray> this.tags).push(new FormControl(null, Validators.required));
    }

    resetValues() {
        this.cardCreationForm.reset();
        this.tags.clear();
        this.tags.push(new FormControl(null, Validators.required));
    }

    onReset() {
        this.resetValues();
    }

    onSubmit() {
        const customCard: CustomCard = this.cardCreationForm.value;

        this.store.dispatch(SearchItemActions.addCard({ card: customCard }))
        this.resetValues();
    }
}
