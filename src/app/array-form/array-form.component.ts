import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      email: '',
      phones: this.formBuilder.array([])
    });
  }

  get phoneForms() {
    return this.formGroup.get('phones') as FormArray;
  }

  addPhone() {

    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });
    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }

}
