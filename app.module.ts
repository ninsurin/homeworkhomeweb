import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {topbar} from './homework3/topbar/topbar.component'
import{main} from './homework3/main/main.component'


@NgModule({
  declarations: [
    AppComponent,
    topbar,
    main,
    

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
