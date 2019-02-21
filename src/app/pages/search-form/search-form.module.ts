import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { SearchFormPages } from './search-form.pages';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrandBarModule } from './../../components/brand-bar/brand-bar.module';
import { CatastralKeyFormModule } from '../../components/catastral-key-form/catastral-key-form.module';
import { CatastralAccountFormModule } from '../../components/catastral-account-form/catastral-account-form.module';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchFormPages}
]
const COMMON_MODULE = [
  CommonModule,
  RouterModule.forChild(routes),
  FlexLayoutModule,
  MatTabsModule,
  MatIconModule,
  BrandBarModule,
  CatastralKeyFormModule,
  CatastralAccountFormModule

]

@NgModule({
  declarations: [SearchFormPages],
  imports: COMMON_MODULE
})
export class SearchFormModule { }
