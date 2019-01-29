import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({

      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65),
        Validators.pattern('^[0-9]*$')
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });


  }
  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get age() {
    return this.formGroup.get('age');
  }

  get agree() {
    return this.formGroup.get('agree');
  }
}
