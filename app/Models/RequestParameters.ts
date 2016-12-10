export class RequestParameters {
    fromStation: string;
    toStation: string;
    departureDate: string;
    departureTime: string;
    sessId: string;
    gvToken: string;
    constructor(obj: any) {
        this.fromStation = obj.from || '';
        this.toStation = obj.to || '';
        this.departureDate = obj.when || '';
        this.departureTime = obj.time || '';
        this.sessId = obj.sessid || '';
        this.gvToken = obj.gvToken || '';
    }
}
