import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subname: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10),
    ]),
    gender: new FormControl('no-answer', [Validators.required]),
  });

  onFormSave() {
    const formValue = this.contactForm.value;
    console.log(formValue);
  }
}
