import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup
} from '@angular/forms';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RequestParameters } from './../Models/RequestParameters';
import { StationService } from '../Services/StationService';
import {Station} from '../Models/Station';


@Component({
    selector: 'main-form',
    template: require('./MainForm.component.html')
})
export class MainFromComponent implements OnInit {
    @Output() submitCall = new EventEmitter<RequestParameters>();
    mainForm: FormGroup
    stations: Station[];

    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            this.mainForm.controls['from'].setValue(params['fromStation'] || '');
            this.mainForm.controls['to'].setValue(params['toStation'] || '');
            this.mainForm.controls['when'].setValue(params['departureDate'] || '');
            this.mainForm.controls['time'].setValue(params['departureTime'] || '');
            this.mainForm.controls['sessid'].setValue(params['sessId'] || '');
            this.mainForm.controls['gvToken'].setValue(params['gvToken'] || '');
        });
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stationService: StationService,
        fb: FormBuilder
    ) {
        this.stationService.getStations().subscribe( stations => this.stations = stations)
        this.mainForm = fb.group({
            from: [''],
            to: [''],
            when: [''],
            time: [''],
            sessid: [''],
            gvToken: ['']
        });
    }

    submitClick(values: any) {

        var params = new RequestParameters(values);
        this.router.navigate(['/search'], { queryParams: params });
        this.onSubmit(params);
        Observable.timer(0, 1000).subscribe((value)=> {
            console.log(value);
            if(value % 10 == 0) {
                this.onSubmit(params);
            }
        });
        return false;
    }

    onSubmit(params: RequestParameters) {
        this.submitCall.next(params);
    }

    
}