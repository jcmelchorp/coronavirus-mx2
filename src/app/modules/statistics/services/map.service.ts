import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  states: string = '/assets/data/mexico_nvo_formato.geojson';

  constructor(private http: HttpClient) {}

  makePlotStates(map: L.map): Observable<any> {
    return this.http.get(this.states);
  }
}
