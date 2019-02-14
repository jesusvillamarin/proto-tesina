import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuNavModule } from './components/menu-nav/menu-nav.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const COMMON_MODULES = [
  BrowserModule,
  AppRoutingModule,
  MenuNavModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: COMMON_MODULES,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
