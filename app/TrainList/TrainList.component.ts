import {Component, Input} from '@angular/core';
import {Train} from '../Models/Train';
@Component({
    selector: 'train-list',
    template: `<train *ngFor="let train of trains" [train]="train"></train>`
})
export class TrainListComponent {
    @Input() trains: Train[]
}