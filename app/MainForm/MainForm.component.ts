import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup
} from '@angular/forms';
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

    onSubmit(values: any) {
        var params = new RequestParameters(values);
        this.router.navigate(['/search'], { queryParams: params })
        this.submitCall.next(params);
        return false;
    }
}