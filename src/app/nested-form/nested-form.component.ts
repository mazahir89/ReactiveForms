import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });

    this.formGroup = this.formBuilder.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    });
  }


}
