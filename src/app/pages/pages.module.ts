import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: "./landing-pages/landing-pages.module#LandingPagesModule"
  },
  {
    path: 'search',
    loadChildren: './search-form/search-form.module#SearchFormModule'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: []
})
export class PagesModule {}
