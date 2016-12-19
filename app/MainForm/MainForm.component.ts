import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormGroup
} from "@angular/forms";
import { Observable } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { RequestParameters } from "./../Models/RequestParameters";
import { StationService } from "../Services/StationService";
import { Station } from "../Models/Station";

@Component({
    selector: "uz-main-form",
    template: require("./MainForm.component.html")
})
export class MainFromComponent implements OnInit {
    @Output() startSearch = new EventEmitter<RequestParameters>();
    @Output() stopSearch = new EventEmitter<RequestParameters>();
    @Output() forceSearch = new EventEmitter<RequestParameters>();
    searching: boolean;
    mainForm: FormGroup;
    stations: Station[];
    private paramsMap: { [id: string]: string } = {
        "fromStation": "from",
        "toStation": "to",
        "departureDate": "when",
        "departureTime": "time",
        "sessId": "sessid",
        "gvToken": "gvToken"
    };

    ngOnInit() {
        this.route.queryParams.subscribe((params: Params) => {
            for (let key in this.paramsMap) {
                let value = this.paramsMap[key];
                if ((params[key] || "") !== this.mainForm.controls[value].value) {
                    this.mainForm.controls[value].setValue(params[key] || "");
                };
            }
        });
        this.mainForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((values: any) => {
                if (this.searching) {
                    this.startClick(values);
                }
            });
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private stationService: StationService,
        private fb: FormBuilder
    ) {
        this.stationService.getStations().subscribe(stations => this.stations = stations);
        this.mainForm = fb.group({
            from: [""],
            to: [""],
            when: [""],
            time: [""],
            sessid: [""],
            gvToken: [""]
        });
    }

    startClick(values: any) {
        this.searching = true;
        let params = new RequestParameters(values);
        this.router.navigate(["/search"], { queryParams: params });
        this.startSearch.next(params);
        return false;
    }
    forceClick(values: any) {
        this.forceSearch.next();
        return false;
    }
    stopClick(values: any) {
        this.searching = false;
        this.stopSearch.next();
        return false;
    }
}