import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TicketsService} from './TicketsService';


import { AppComponent }   from './app.component';
import { MainFromComponent } from './MainForm/MainForm.component'
import {TrainComponent} from './Train/Train.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, MainFromComponent, TrainComponent ],
  providers:    [ TicketsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }