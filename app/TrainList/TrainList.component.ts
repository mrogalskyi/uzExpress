import { Component, Input } from "@angular/core";
import { Train } from "../Models/Train";
@Component({
    selector: "uz-train-list",
    template: `<uz-train *ngFor="let train of trains" [train]="train"></uz-train>`
})
export class TrainListComponent {
    @Input() trains: Train[];
}