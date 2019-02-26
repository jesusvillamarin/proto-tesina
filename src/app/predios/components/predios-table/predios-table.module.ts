import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { PrediosTableComponent } from './predios-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule
]

@NgModule({
  declarations: [PrediosTableComponent],
  imports: COMMON_MODULE,
  exports: [PrediosTableComponent]
})
export class PrediosTableModule { }
