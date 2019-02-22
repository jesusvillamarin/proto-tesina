import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatastralKeyFormComponent } from './catastral-key-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [CatastralKeyFormComponent],
  imports: COMMON_MODULE,
  exports: [CatastralKeyFormComponent]
})
export class CatastralKeyFormModule {}
