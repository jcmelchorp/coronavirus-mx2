import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Oneday } from '../../models/oneday';
import { ApiService } from '../../services/api.service';
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

  constructor(private apiService: ApiService) {}

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
    const startDate = '2020-05-01T00:00:00Z';
    const endDate = '2020-06-26T00:00:00Z';
    const params = '?from=' + startDate + '&to=' + endDate + '';
    //params = '';
    this.apiService
      .sendGetRequest('total/country/' + this.countryName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        const myObj = res.body;
        const confirmedData = myObj.map(({ Confirmed }) => Confirmed);
        const activeData = myObj.map(({ Active }) => Active);
        const recoveredData = myObj.map(({ Recovered }) => Recovered);
        const deathsData = myObj.map(({ Deaths }) => Deaths);
        const newConfirmedData = this.diff(confirmedData);
        const newActiveData = this.diff(activeData);
        const newRecoveredData = this.diff(recoveredData);
        const newDeathsData = this.diff(deathsData);
        const selectedLabel = myObj.map(({ Date }) => Date);
        for (let i in selectedLabel) {
          selectedLabel[i] = new Date(selectedLabel[i]).toDateString();
        }
        const newDataSet: ChartDataSets[] = [
          { data: newConfirmedData, label: 'Nuevos Confirmados' },
          { data: newRecoveredData, label: 'Nuevos Recuperados' },
          { data: newActiveData, label: 'Nuevos Activos' },
          { data: newDeathsData, label: 'Nuevos Muertos' },
        ];
        const charDataSet: ChartDataSets[] = [
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
