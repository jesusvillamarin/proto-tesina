import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { BrandBarComponent } from './brand-bar.component';

const COMMON_MODULES = [
  CommonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatIconModule
]

@NgModule({
  declarations: [BrandBarComponent],
  imports: COMMON_MODULES,
  exports: [BrandBarComponent]

})
export class BrandBarModule { }
