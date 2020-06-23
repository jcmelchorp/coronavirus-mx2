import { Injectable } from '@angular/core';
import { Oneday } from '../models/oneday';
import { Adapter } from './adapter.interface';

@Injectable({
  providedIn: 'root',
})
export class DataAdapter implements Adapter<Oneday> {
  adapt(item: any): Oneday {
    return new Oneday(
      item.country,
      item.countryCode,
      item.providence,
      item.city,
      item.citycode,
      item.lat,
      item.lon,
      item.confirmed,
      item.deaths,
      item.recovered,
      item.active,
      item.date
    );
  }
}
