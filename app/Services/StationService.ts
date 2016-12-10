import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {Station} from '../Models/Station';

@Injectable()
export class StationService {

    private stations: ReplaySubject<Station[]> = new ReplaySubject<Station[]>(1);

    getStations() {
        this.stations.next([
                {id:2200001, title:'Київ'},
                {id:2200184, title:'Кривин'}
            ])
        return this.stations;
    }
}