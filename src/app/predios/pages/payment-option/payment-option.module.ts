import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderConektaModule } from '../../components/order-conekta/order-conekta.module';

import { PaymentOptionPages  } from './payment-option.pages';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatRadioModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  OrderConektaModule
];

@NgModule({
  declarations: [PaymentOptionPages],
  imports: COMMON_MODULE,
  exports: [PaymentOptionPages]
})
export class PaymentOptionModule { }
