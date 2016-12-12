import { Component } from "@angular/core";
import { RequestParameters } from "../Models/RequestParameters";
import { TicketsService } from "../Services/TicketsService";
@Component({
  selector: "uz-search",
  template: `
    <h1>Tickets helper</h1>
    <uz-main-form (startSearch)="searchStart($event)"></uz-main-form>
    {{error}}
    <train-list [trains]="trains"></train-list>
    `
})
export class SearchComponent {
  trains: any[];
  error: string;
  constructor(public ticketsService: TicketsService) {
  }
  searchStart(params: RequestParameters): void {
    this.error = "";
    this.trains = [];
    this.ticketsService.getTrainsWithTickets(params)
    .subscribe((trains) => this.trains = trains, (err) => this.error = err);
  }
}
