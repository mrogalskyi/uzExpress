import { Component } from '@angular/core';
require('./../vendor/semantic.min.css');
import {RequestParameters} from './Models/RequestParameters';
import {TicketsService} from './TicketsService';
@Component({
  selector: 'my-app',
  template: `
    <h1>Tickets helper</h1>
    <main-form (submitCall)="getTicket($event)"></main-form>
    `
})
export class AppComponent {
  constructor(public ticketsService: TicketsService) {
      
  }
  getTicket(params: RequestParameters):void {
    this.ticketsService.getTicket(params)
    .subscribe((responce) => console.log(responce.json()));
  }
}