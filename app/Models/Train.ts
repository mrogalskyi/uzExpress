export class Train {
    Number: string;
    Cars: Car;
    constructor(obj: any) {
        this.Number = obj.num || "";
        if (obj.types) {
            this.Cars = obj.types.map(t => new Car(t));
        }
    }
}

export class Car {
    Letter: string;
    Places: number;
    constructor(obj: any) {
        this.Letter = obj.letter || "";
        this.Places = obj.places || 0;
    }
}