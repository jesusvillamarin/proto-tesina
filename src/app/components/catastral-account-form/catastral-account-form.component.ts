import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'catastral-account-form',
  templateUrl: './catastral-account-form.component.html',
  styleUrls: ['./catastral-account-form.component.scss']
})
export class CatastralAccountFormComponent implements OnInit {

  @Output() searchCastastralAccount = new EventEmitter();
  @Output() previousForm = new EventEmitter();

  form : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      type: ['', [Validators.required]],
      account: ['', [Validators.required,
         Validators.minLength(7),
         Validators.maxLength(7),
        Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]]
    })
   }

  ngOnInit() {
  }

  search(){
    if(this.form.invalid) return;

    this.searchCastastralAccount.emit(this.form.value);
  }

  onPrevious(){
    this.previousForm.emit(0);
  }

}
