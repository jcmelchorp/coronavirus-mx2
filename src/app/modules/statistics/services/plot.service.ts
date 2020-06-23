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
    this.timeline = [];
    this._apiService
      .sendGetRequest('total/dayone/country/mexico')
      .subscribe((res: HttpResponse<any>) => {
        this.response = res.body;
        this.response.forEach((element) => {
          console.log(element.confirmed);
          this.timeline.push(element.confirmed);
        });
      });
    return this.timeline;
  }
}
