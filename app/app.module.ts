import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TicketsService} from './TicketsService';


import { AppComponent }   from './app.component';
import { MainFromComponent } from './MainForm/MainForm.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, MainFromComponent ],
  providers:    [ TicketsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }