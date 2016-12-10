import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TicketsService} from './TicketsService';


import { AppComponent }   from './app.component';
import { MainFromComponent } from './MainForm/MainForm.component'
import { SearchComponent } from './Search/Search.component'
import {TrainComponent} from './Train/Train.component';

const appRoutes: Routes = [
  {path:'', redirectTo: 'search',pathMatch:'full'},
  {path:'search', component: SearchComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule, 
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
     ],
  declarations: [ AppComponent, MainFromComponent, TrainComponent, SearchComponent ],
  providers:    [ TicketsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }