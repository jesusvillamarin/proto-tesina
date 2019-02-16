import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrandBarModule } from '../../components/brand-bar/brand-bar.module';

import { LandingPages } from "./landing-pages.pages";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingPages }
];

const COMMON_MODULE = [
  BrandBarModule,
  CommonModule,
  RouterModule.forChild(routes),
  FlexLayoutModule,
  MatButtonModule
]

@NgModule({
  declarations: [LandingPages],
  imports: COMMON_MODULE
})
export class LandingPagesModule {}
