import { Component, Input } from "@angular/core";
import { Train } from "../Models/Train";
@Component({
    selector: "uz-train-list",
    template: `
    <table *ngIf="trains.length" class="ui celled table">
        <thead>
            <tr>
                <th>Number</th>
                <th>Depart</th>
                <th>Arrive</th>
                <th>Places</th>
            </tr>
        </thead>
        <tbody>
            <tr uz-train *ngFor="let train of trains" [train]="train"></tr>
        </tbody>
    </table>
    `
})
export class TrainListComponent {
    @Input() trains: Train[];
}