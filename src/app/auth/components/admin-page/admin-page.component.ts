import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  cardCreationForm!: FormGroup;

  constructor() {}

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
    });
  }

  get title() {
    return this.cardCreationForm.get('title');
  }

  get description() {
    return this.cardCreationForm.get('description');
  }

  get imgLink() {
    return this.cardCreationForm.get('imgLink');
  }

  get videoLink() {
    return this.cardCreationForm.get('videoLink');
  }

  get creationDate() {
    return this.cardCreationForm.get('creationDate');
  }

  validateDate(control: FormControl): { [s: string]: boolean } | null {
    const date = control.value;
    if(new Date(date) > new Date()){
      return { dateIsInValid: true }
    }
    return null;
  }

  onSubmit() {
    console.log(this.cardCreationForm.value);
  }
}
