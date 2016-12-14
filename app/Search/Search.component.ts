import { Component, EventEmitter } from "@angular/core";
import { RequestParameters } from "../Models/RequestParameters";
import { TicketsService } from "../Services/TicketsService";
import { Observable, Subject, Subscription } from "rxjs";
import { Train } from "../Models/Train";
@Component({
  selector: "uz-search",
  template: `
    <h1>Tickets helper</h1>
    <uz-main-form (startSearch)="searchStart($event)" (stopSearch)="searchStop()" (forceSearch)="searchForce()"></uz-main-form>
    {{error}}
    <uz-train-list [trains]="trains"></uz-train-list>
    `
})
export class SearchComponent {
  trains: any[];
  error: string;
  search: Subscription;
  force: EventEmitter<any> = new EventEmitter<any>();
  constructor(public ticketsService: TicketsService) {
  }
  searchStart(params: RequestParameters): void {
    this.error = "";
    this.trains = [];
    this.searchStop();
    this.search = this.ticketsService.getTrainsWithTicketsStream(params, this.force).
      subscribe((trains) => {
        this.error = "";
        this.trains = trains;
        this.playSound();
      }, (err) => {
        this.trains = [];
        this.error = err;
      });
  }
  searchStop(): void {
    this.search && this.search.unsubscribe();
  }
  searchForce() {
    this.force.next();
  }

  private playSound(): void {
    let v = new Audio("/assets/1.mp3");
    v.play();
  }
}
