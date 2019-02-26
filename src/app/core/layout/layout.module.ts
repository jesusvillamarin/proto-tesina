import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { CoreLayout } from './core.layout';

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  RouterModule
];

@NgModule({
  declarations: [CoreLayout],
  imports: COMMON_MODULE,
  exports:[CoreLayout, COMMON_MODULE]
})
export class LayoutModule {}
