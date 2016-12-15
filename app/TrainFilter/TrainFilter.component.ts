import { Component } from "@angular/core";

@Component({
    selector: "uz-train-filter",
    template: `
        <form class="ui from">
            <div class="two fields">
                <div class="seven wide field">
                    <select clas="ui fluid dropdown">
                        <option value="P">Plackart</option>
                        <option value="K">Kupe</option>
                    </select>
                </div>
            </div>
        </form>
    `
})
export class TrainFilterComponent {

}