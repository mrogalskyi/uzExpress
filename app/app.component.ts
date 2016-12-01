import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import * as moment from 'moment';
require('./../vendor/semantic.min.css');
@Component({
  selector: 'my-app',
  template: `
    <h1>Tickets helper</h1>
    <main-form></main-form>
    `
})
export class AppComponent {
  public date;
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
  constructor(public http: Http) {
      
  }
  getTicket(date:string):void {
    let formatedDate = moment(date).format('DD.MM.YYYY');
    this.http.request('http://localhost:3000/?date='+formatedDate)
      .subscribe((res: Response) => {
          console.log(res);
      })
  }
}