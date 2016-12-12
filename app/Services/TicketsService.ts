import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestParameters } from "../Models/RequestParameters";
import { Http, Response } from "@angular/http";
import * as moment from "moment";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { Train } from "../Models/Train";

@Injectable()
export class TicketsService {
    constructor(private http: Http) {

    }
    getTrainsWithTicketsStream(params: RequestParameters): Observable<Train[]> {
        let formatedParams = Object.assign({}, params, {departureDate: moment(params.departureDate).format("DD.MM.YYYY")});
        let trainStream = IntervalObservable.create(10000)
            .startWith(0)
            .flatMap(() => this.http.post(`http://localhost:3000/tickets`, formatedParams))
            .map(res => res.json())
            .map((res) => {
                if (res.value && Array.isArray(res.value)) {
                    console.log(res.value);
                    return res.value.map((val) => new Train(val));
                }
                throw new Error(res.value || "Server error");
            });
        return trainStream;
    }
}