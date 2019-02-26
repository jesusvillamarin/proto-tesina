import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "payment-option",
  templateUrl: './payment-option.pages.html',
  styleUrls: ['./payment-option.pages.scss']
})
export class PaymentOptionPages implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      card: ['', [Validators.required]],
      code: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]]
    });
  }

  ngOnInit() {}
}
