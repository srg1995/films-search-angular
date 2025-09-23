import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(),
    subname: new FormControl(),
    description: new FormControl(),
    gender: new FormControl('no-answer'),
  });

  onFormSave() {
    const formValue = this.contactForm.value;
    console.log(formValue);
  }
}
