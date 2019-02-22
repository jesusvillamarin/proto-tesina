import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catastral-account-form',
  templateUrl: './catastral-account-form.component.html',
  styleUrls: ['./catastral-account-form.component.scss']
})
export class CatastralAccountFormComponent implements OnInit {

  form : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      selectControl: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

}
