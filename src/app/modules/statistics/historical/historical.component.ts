import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { PlotService } from '../services/plot.service';
import { Oneday } from '../models/oneday';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss'],
})
export class HistoricalComponent implements OnInit {
  public countryData: Oneday[];
  isLoading: boolean = true;
  confirmed: ChartDataSets;
  public lineChartData: ChartDataSets[] = [{ data: [], label: 'Confirmed' }];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
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
  constructor(private _plotService: PlotService) {}

  ngOnInit(): any {
    this.lineChartData = [
      { data: this._plotService.getData('Confirmed'), label: 'Confirmed' },
    ];
    console.log(this._plotService.getData('Confirmed'));
    this.isLoading = !this.isLoading;
  }
}
