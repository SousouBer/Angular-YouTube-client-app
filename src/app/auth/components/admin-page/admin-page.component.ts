import { Component, OnInit } from "@angular/core";
import {
    FormArray, FormControl, FormGroup, Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { addCard } from "src/app/store/actions/custom-card.actions";
import { AppState } from "src/app/store/app-state.model";
import { CustomCard } from "src/app/youtube/models/custom-card.model";

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
        const id = "" + Math.random();
        const customCard: CustomCard = this.cardCreationForm.value;
        customCard['id'] = id;

        this.store.dispatch(addCard({ card: customCard }))
        this.resetValues();
    }
}
