import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { CoreLayout } from './layout/core.layout';

const routes: Routes = [
  {
    path: '',
    component: CoreLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'predios' },
      {
        path: 'predios',
        loadChildren:
          '../predios/predios.module#PrediosModule'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)]
})
export class CoreRoutingModule {}
