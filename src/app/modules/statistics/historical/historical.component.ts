import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Oneday } from '../models/oneday';
import { ApiService } from '../services/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
})
export class HistoricalComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading: boolean = true;
  public countryData: Oneday[];
  public dataline: number[];
  public dataConfirm: number[];
  countryName: string;

  public datalabel: Label[];
  public lineChartData: ChartDataSets[] = [{ data: [], label: '' }];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor(private _apiService: ApiService) {}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.countryName = 'mexico';
    this._apiService
      .sendGetRequest('total/dayone/country/' + this.countryName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        const myObj = res.body;
        var confirmedData = myObj.map(({ Confirmed }) => Confirmed);
        var activeData = myObj.map(({ Active }) => Active);
        var recoveredData = myObj.map(({ Recovered }) => Recovered);
        var deathsData = myObj.map(({ Deaths }) => Deaths);

        var selectedLabel = myObj.map(({ Date }) => Date);
        var charDataSet: ChartDataSets[] = [
          { data: confirmedData, label: 'Confirmed' },
          { data: activeData, label: 'Active' },
          { data: recoveredData, label: 'Recovered' },
          { data: deathsData, label: 'Deaths' },
        ];
        this.lineChartData = charDataSet;
        this.lineChartLabels = selectedLabel;
        this.isLoading = !this.isLoading;
      });
  }
}
