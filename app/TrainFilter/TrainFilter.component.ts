import { Component, Output, OnInit, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";
import { TrainFilter } from "../Models/TrainFilter";

@Component({
    selector: "uz-train-filter",
    template: `
    <div class="ui grid">
    <div class="centered row">
        <div class="ten wide column">
        <form class="ui from">
                <div class="two fields">
                    <div class="field">
                        <select clas="ui fluid dropdown" name="carLetter" [formControl]="formLetterControl">
                        <option value="">All</option>
                        <option value="П">Plackart</option>
                        <option value="К">Kupe</option>
                    </select>
                    </div>
                    <div class="field">
                    </div>
                </div>
        </form>
        </div>
        </div>
        </div>
    `
})
export class TrainFilterComponent implements OnInit {
    @Output() filterChange = new EventEmitter<TrainFilter>();
    form: FormGroup;
    formLetterControl: AbstractControl;
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            carLetter: [""]
        });
        this.formLetterControl = this.form.controls["carLetter"];
    }
    ngOnInit() {
        this.form.valueChanges.subscribe((values: any) => {
            this.filterChange.next(new TrainFilter(values));
        });
    }
}