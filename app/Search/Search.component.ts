import { Component } from "@angular/core";
import { RequestParameters } from "../Models/RequestParameters";
import { TicketsService } from "../Services/TicketsService";
import { Observable, Subject } from "rxjs";
import { Train } from "../Models/Train";
@Component({
  selector: "uz-search",
  template: `
    <h1>Tickets helper</h1>
    <uz-main-form (startSearch)="searchStart($event)" (stopSearch)="searchStop()"></uz-main-form>
    {{error}}
    <train-list [trains]="trains"></train-list>
    `
})
export class SearchComponent {
  trains: any[];
  error: string;
  search: Observable<Train[]>;
  stop: Subject<boolean> = new Subject<boolean>();
  constructor(public ticketsService: TicketsService) {
  }
  searchStart(params: RequestParameters): void {
    this.error = "";
    this.trains = [];
    this.search = this.ticketsService.getTrainsWithTicketsStream(params).takeUntil(this.stop);
    this.search.subscribe((trains) => this.trains = trains, (err) => this.error = err);
  }
   searchStop(): void {
     this.stop.next(true);
  }
}
