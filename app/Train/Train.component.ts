import {Component, Input, EventEmitter} from '@angular/core';
import {Train} from '../Models/Train';
@Component({
    selector: 'train',
    template:`
    <div>{{train.Number}}</div>
    <ul>
        <li *ngFor="let car of train.Cars">{{car | json}}</li>
    </ul>
    `
})
export class TrainComponent {
    @Input() train: Train;
}