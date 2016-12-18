import { Component, EventEmitter } from "@angular/core";
import { RequestParameters } from "../Models/RequestParameters";
import { TicketsService } from "../Services/TicketsService";
import { Observable, Subject, Subscription } from "rxjs";
import { Train } from "../Models/Train";
import { TrainFilter } from "../Models/TrainFilter";

@Component({
  selector: "uz-search",
  template: `
    <h1>Tickets helper</h1>
    <uz-main-form (startSearch)="searchStart($event)" (stopSearch)="searchStop()" (forceSearch)="searchForce()"></uz-main-form>
    <uz-train-filter (filterChange)="filterChange($event)"></uz-train-filter>
    {{error}}
    <uz-train-list [trains]="getFilteredTrains()"></uz-train-list>
    `
})
export class SearchComponent {
  trains: Train[] = [];
  error: string;
  search: Subscription;
  filter: TrainFilter = new TrainFilter({});
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
  filterChange(filter: TrainFilter) {
    this.filter = filter;
  }
  getFilteredTrains() {
    return this.trains.filter(train => {
      return train.cars.some(car => !this.filter.carLetter || car.letter === this.filter.carLetter);
    });
  }

  private playSound(): void {
    if (this.getFilteredTrains().length) {
      let v = new Audio("/assets/1.mp3");
      v.play();
    }
  }
}
