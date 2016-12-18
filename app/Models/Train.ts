export class Train {
    number: string;
    cars: Car[];
    from: Point;
    till: Point;
    constructor(obj: any) {
        this.number = obj.num || "";
        if (obj.types) {
            this.cars = obj.types.map(t => new Car(t));
        }
        if (obj.from) {
            this.from = new Point(obj.from);
        }
        if (obj.till) {
            this.till = new Point(obj.till);
        }
    }
}

export class Car {
    letter: "П"| "С3" | "К" | "Л";
    places: number;
    constructor(obj: any) {
        this.letter = obj.letter || "";
        this.places = obj.places || 0;
    }
}

class Point {
    date: Date;
    station: string;
    constructor(obj: any) {
        if (obj.date) {
            this.date = new Date(obj.date * 1000);
        }
        this.station = obj.station || "";
    }
}