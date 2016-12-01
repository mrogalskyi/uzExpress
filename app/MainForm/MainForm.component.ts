import {Component} from '@angular/core';
 import {
 FormBuilder,
 FormGroup
} from '@angular/forms';


@Component({
    selector: 'main-form',
    template: require('./MainForm.component.html')
})
export class MainFromComponent {
    mainForm: FormGroup
    stations: any[] = [{id:1, title:'Київ'},{id:2, title:'Кривин'}];

    constructor(fb: FormBuilder) {
         this.mainForm = fb.group({
            'from': ['1'],
            'to': ['2'],
            'when': '2016-12-22',
            'time': '00:00'
            });
    }

    onSubmit(values:any) {
        console.log(values);
        return false;
    }
}