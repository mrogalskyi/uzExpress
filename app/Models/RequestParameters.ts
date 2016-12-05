export class RequestParameters {
    fromStation: string;
    toStation: string;
    departureDate: string;
    departureTime: string;
    sessId: string;
    gvToken: string;
    constructor(obj: any) {
        this.fromStation = obj.from || '0';
        this.toStation = obj.to || '0';
        this.departureDate = obj.when || '0';
        this.departureTime = obj.time || '0';
        this.sessId = obj.sessid || '0';
        this.gvToken = obj.gvToken || '0';
    }
}
