import { Component } from '@angular/core';
require('../../vendor/semantic.min.css');
import {RequestParameters} from '../Models/RequestParameters';
import {TicketsService} from '../TicketsService';
@Component({
  selector: 'search',
  template: `
    <h1>Tickets helper</h1>
    <main-form (submitCall)="getTicket($event)"></main-form>
    <train *ngFor="let train of trains" [train]="train"></train>
    `
})
export class SearchComponent {
  trains: any[];
  constructor(public ticketsService: TicketsService) {
      
  }
  getTicket(params: RequestParameters):void {
    this.trains = [];
    this.ticketsService.getTicket(params)
    .subscribe((responce) => {
      this.trains = responce.json().value;
      console.log(responce.json());
      console.log(this.trains);
    });
  }
}
