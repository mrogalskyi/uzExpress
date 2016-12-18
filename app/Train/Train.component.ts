import { Component, Input, EventEmitter } from "@angular/core";
import { Train } from "../Models/Train";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "[uz-train]",
    template: `
    <td>{{train.number}} {{train.from.station}} - {{train.till.station}}</td>
    <td>{{train.from.date | date:'dd MMM HH:mm'}}</td>
    <td>{{train.till.date | date:'dd MMM HH:mm'}}</td>
    <td>
        <span *ngFor="let car of train.cars">{{car.letter}} : {{car.places}} </span>
    </td>
    `
})
export class TrainComponent {
    @Input() train: Train;
}