import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdToolbarModule, MdButtonModule, MdCheckboxModule} from '@angular/material'; //import the modules corresponding to each of the Material Components
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdToolbarModule, 
    MdButtonModule, 
    MdCheckboxModule,
    FlexLayoutModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
