import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'catastral-key-form',
  templateUrl: './catastral-key-form.component.html',
  styleUrls: ['./catastral-key-form.component.scss']
})
export class CatastralKeyFormComponent implements OnInit {

  @Output() searchCastastralKey = new EventEmitter();
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      tipo: ['', [Validators.required, Validators.pattern('[0-9]'), Validators.minLength(1), Validators.maxLength(1)]],
      localidad: ['', [Validators.required, Validators.pattern('[0-9][0-9][0-9]'), Validators.minLength(3), Validators.maxLength(3)]],
      region: ['', [Validators.required, Validators.pattern('[0-9][0-9]'), Validators.minLength(2), Validators.maxLength(2)]],
      manzana: ['', [Validators.required, Validators.pattern('[0-9][0-9][0-9]'), Validators.minLength(3), Validators.maxLength(3)]],
      lote: ['', [Validators.required, Validators.pattern('[0-9][0-9][0-9]'), Validators.minLength(3), Validators.maxLength(3)]],
      nivel: ['', [Validators.required, Validators.pattern('[0-9][0-9]'), Validators.minLength(2), Validators.maxLength(2)]],
      depto: ['', [Validators.required, Validators.pattern('[0-9][0-9][0-9]'), Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  ngOnInit() {
  }

  searchPerKey(event){

    if(this.form.invalid) return;

    this.searchCastastralKey.emit(event);
  }

}
