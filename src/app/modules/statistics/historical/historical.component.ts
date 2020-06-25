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
  countryName: string;
  public cumulativeData: ChartDataSets[] = [{ data: [], label: '' }];
  public newData: ChartDataSets[] = [{ data: [], label: '' }];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = { responsive: true };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(0,120,0,1)',
      backgroundColor: 'rgba(0,120,0,0.3)',
    },
    {
      borderColor: 'rgba(50,80,180,1)',
      backgroundColor: 'rgba(50,80,180,0.3)',
    },
    {
      borderColor: 'rgba(230,160,0,1)',
      backgroundColor: 'rgba(230,160,0,0.5)',
    },
    {
      borderColor: 'rgba(180,20,0,1)',
      backgroundColor: 'rgba(180,20,0,0.5)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor(private _apiService: ApiService) {}

  diff(A) {
    return A.slice(1).map(function (n, i) {
      return n - A[i];
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.countryName = 'mexico';
    var startDate = '2020-05-01T00:00:00Z';
    var endDate = '2020-06-25T00:00:00Z';
    var params = '?from=' + startDate + '&to=' + endDate + '';
    this._apiService
      .sendGetRequest('total/country/' + this.countryName + params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        const myObj = res.body;
        var confirmedData = myObj.map(({ Confirmed }) => Confirmed);
        var activeData = myObj.map(({ Active }) => Active);
        var recoveredData = myObj.map(({ Recovered }) => Recovered);
        var deathsData = myObj.map(({ Deaths }) => Deaths);
        var newConfirmedData = this.diff(confirmedData);
        var newActiveData = this.diff(activeData);
        var newRecoveredData = this.diff(recoveredData);
        var newDeathsData = this.diff(deathsData);
        var selectedLabel = myObj.map(({ Date }) => Date);
        for (var i in selectedLabel) {
          selectedLabel[i] = new Date(selectedLabel[i]).toDateString();
        }
        var newDataSet: ChartDataSets[] = [
          { data: newConfirmedData, label: 'Nuevos Confirmados' },
          { data: newRecoveredData, label: 'Nuevos Recuperados' },
          { data: newActiveData, label: 'Nuevos Activos' },
          { data: newDeathsData, label: 'Nuevos Muertos' },
        ];
        var charDataSet: ChartDataSets[] = [
          { data: confirmedData, label: 'Confirmados' },
          { data: recoveredData, label: 'Recuperados' },
          { data: activeData, label: 'Activos' },
          { data: deathsData, label: 'Muertes' },
        ];
        this.cumulativeData = charDataSet;
        this.newData = newDataSet;
        this.lineChartLabels = selectedLabel;
      });
    this.isLoading = !this.isLoading;
  }
}
