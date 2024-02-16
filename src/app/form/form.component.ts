import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('Andreas', [Validators.minLength(10), Validators.required, customValidator('Andreas')]),
    email: new FormControl(''),
    city: new FormControl('Örebro'),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl('')
    }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}

function customValidator(expectedName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(control.value !== expectedName){
      return { invalidName: { value: control.value } };
    } else{
      return null;
    }
  };
}