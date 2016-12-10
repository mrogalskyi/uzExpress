import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParameters } from '../Models/RequestParameters';
import { Http, Response } from '@angular/http';
import * as moment from 'moment';

@Injectable()
export class TicketsService {
    constructor(private http: Http) {

    }
    getTicket(params: RequestParameters): Observable<any> {

        let formatedDate = moment(params.departureDate).format('DD.MM.YYYY');

        return this.http.request(`http://localhost:3000/tickets?date=${formatedDate}&sessId=${params.sessId}&gvToken=${params.gvToken}`)
    }
}