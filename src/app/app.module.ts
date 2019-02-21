import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


const COMMON_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FlexLayoutModule,
  BrowserAnimationsModule
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
