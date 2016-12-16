export class TrainFilter {
    carLetter: string;
    constructor(obj: any) {
        this.carLetter = obj.carLetter || "";
    }
}