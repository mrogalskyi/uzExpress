import { Component } from '@angular/core';
import {RequestParameters} from '../Models/RequestParameters';
import {TicketsService} from '../Services/TicketsService';
@Component({
  selector: 'search',
  template: `
    <h1>Tickets helper</h1>
    <main-form (submitCall)="search($event)"></main-form>
    {{error}}
    <train-list [trains]="trains"></train-list>
    `
})
export class SearchComponent {
  trains: any[];
  error: string;
  constructor(public ticketsService: TicketsService) {
      
  }
  search(params: RequestParameters):void {
    this.error = '';
    this.trains = [];
    this.ticketsService.getTrainsWithTickets(params)
    .subscribe((trains) => this.trains = trains, (err) => this.error = err);
  }
}
