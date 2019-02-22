import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatastralAccountFormComponent } from './catastral-account-form.component'

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatSelectModule
];


@NgModule({
  declarations: [CatastralAccountFormComponent],
  imports: COMMON_MODULE,
  exports: [CatastralAccountFormComponent]
})
export class CatastralAccountFormModule { }
