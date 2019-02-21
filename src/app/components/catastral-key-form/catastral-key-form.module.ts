import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CatastralKeyFormComponent }  from './catastral-key-form.component'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';


const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
]

@NgModule({
  declarations: [CatastralKeyFormComponent],
  imports: COMMON_MODULE,
  exports: [CatastralKeyFormComponent]
})
export class CatastralKeyFormModule { }
