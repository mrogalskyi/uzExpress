import { Component } from '@angular/core';
require('./../vendor/semantic.min.css');
import {RequestParameters} from './Models/RequestParameters';
import {TicketsService} from './TicketsService';
@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
