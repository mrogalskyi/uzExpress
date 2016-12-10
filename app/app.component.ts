import { Component } from '@angular/core';
require('./../vendor/semantic.min.css');
@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
