import {Component, Input, EventEmitter} from '@angular/core';
@Component({
    selector: 'train',
    template:`<div>{{train.num}}</div>`
})
export class TrainComponent {
    @Input() train;
}