import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TaxesListPages } from './taxes-list.pages';
import { Routes, RouterModule } from '@angular/router';

import { PrediosTableModule } from '../../components/predios-table/predios-table.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TaxesListPages }
];

const COMMON_MODULE = [
  CommonModule,
  FlexLayoutModule,
  RouterModule.forChild(routes),
  PrediosTableModule
];

@NgModule({
  declarations: [TaxesListPages],
  imports: COMMON_MODULE,
  exports:[RouterModule]
})
export class TaxesListModule {}
