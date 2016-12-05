import {Component, Output, EventEmitter} from '@angular/core';
 import {
 FormBuilder,
 FormGroup
} from '@angular/forms';

import {RequestParameters} from './../Models/RequestParameters';


@Component({
    selector: 'main-form',
    template: require('./MainForm.component.html')
})
export class MainFromComponent {
    @Output() submitCall = new EventEmitter<RequestParameters>();
    mainForm: FormGroup
    stations: any[] = [{id:1, title:'Київ'},{id:2, title:'Кривин'}];

    constructor(fb: FormBuilder) {
         this.mainForm = fb.group({
            'from': ['1'],
            'to': ['2'],
            'when': '2016-12-22',
            'time': '00:00',
            sessid:'',
            'gvToken': ''
        });
    }

    onSubmit(values:any) {
        var params = new RequestParameters(values);
        this.submitCall.next(params);
        return false;
    }
}