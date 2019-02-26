import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Routes, RouterModule } from '@angular/router';

import { TaxesListModule } from './pages/taxes-list/taxes-list.module';
import { TaxesListPages } from './pages/taxes-list/taxes-list.pages';
import { PaymentOptionPages } from './pages/payment-option/payment-option.pages';
import { PaymentOptionModule } from './pages/payment-option/payment-option.module';

import { reducers } from '../shared/store/reducers';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: TaxesListPages },
  { path: 'payment', component: PaymentOptionPages }
];
const COMMON_MODULE = [
  CommonModule,
  TaxesListModule,
  PaymentOptionModule,
  RouterModule.forChild(routes),
  StoreModule.forFeature('predio', reducers)
  // EffectsModule.forFeature
];

@NgModule({
  imports: COMMON_MODULE,
})
export class PrediosModule {}
