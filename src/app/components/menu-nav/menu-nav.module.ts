import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuNavComponent } from './menu-nav.component'


const COMMON_MODULES = [
  CommonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [MenuNavComponent],
  imports: COMMON_MODULES,
  exports: [MenuNavComponent]
})
export class MenuNavModule { }
