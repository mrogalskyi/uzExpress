import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { RequestParameters } from "../Models/RequestParameters";
import { Http, Response } from "@angular/http";
import * as moment from "moment";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { Train } from "../Models/Train";
import { TrainFilter } from "../Models/TrainFilter";

@Injectable()
export class TicketsService {
    constructor(private http: Http) {

    }
    getTrainsWithTicketsStream(params: RequestParameters, force: Observable<any>): Observable<Train[]> {
        let formatedParams = Object.assign({}, params, { departureDate: moment(params.departureDate).format("DD.MM.YYYY") });
        let trainStream = IntervalObservable.create(20000)
            .delayWhen((v) => Observable.timer(10000 * Math.random()))
            .startWith(0)
            .merge(force)
            .throttleTime(3000)
            .switchMap(() => this.http.post(`http://localhost:3000/tickets`, formatedParams))
            .map(res => res.json())
            .map((res) => {
                if (!res.value || !Array.isArray(res.value)) {
                    throw new Error(res.value || "Server error");
                }
                return res.value;
            })
            .map((values) => values.map((val) => new Train(val)));
        return trainStream;
    }
}