import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpResponse } from '@angular/common/http';
import { Oneday } from '../models/oneday';

@Injectable({
  providedIn: 'root',
})
export class PlotService {
  public response: Oneday[] = [];
  public timeline: number[] = [];
  constructor(private _apiService: ApiService) {}

  getData(key: string): number[] {
    this.getTimelineArray('mexico');
    this.response.forEach((element) => {
      this.timeline.push(element[key]);
    });
    return this.timeline;
  }

  getTimelineArray(country: string) {
    this._apiService
      .sendGetRequest('total/dayone/country/' + country)
      .subscribe((res: HttpResponse<any>) => {
        this.response = res.body;
      });
  }
}
