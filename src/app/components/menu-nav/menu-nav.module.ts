import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MenuNavComponent } from './menu-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';


const COMMON_MODULES = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule

]

@NgModule({
  declarations: [MenuNavComponent],
  imports: COMMON_MODULES,
  exports: [MenuNavComponent]
})
export class MenuNavModule { }
