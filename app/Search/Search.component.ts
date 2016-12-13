import { Component } from "@angular/core";
import { RequestParameters } from "../Models/RequestParameters";
import { TicketsService } from "../Services/TicketsService";
import { Observable, Subject, Subscription } from "rxjs";
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
  search: Subscription;
  constructor(public ticketsService: TicketsService) {
  }
  searchStart(params: RequestParameters): void {
    this.error = "";
    this.trains = [];
    this.searchStop();
    this.search = this.ticketsService.getTrainsWithTicketsStream(params).
                  subscribe((trains) => {
                    this.error = "";
                    this.trains = trains;
                    let v = new Audio("/assets/1.mp3");
                    v.play();
                  }, (err) => {
                    this.trains = [];
                    this.error = err;
                  });
  }
   searchStop(): void {
     this.search && this.search.unsubscribe();
  }
}
