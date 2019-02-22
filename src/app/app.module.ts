import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Hammer from 'hammerjs';


import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

const COMMON_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FlexLayoutModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [AppComponent],
  imports: COMMON_MODULES,
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {}
