import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { FormBuilder, Validators } from '@angular/forms';

export interface Result {
  suc?: number;
  inf?: number;
  rec?: number;
  t?: number;
}

@Component({
  selector: 'app-s-i-r',
  templateUrl: './s-i-r.component.html',
  styleUrls: ['./s-i-r.component.scss'],
})
export class SIRComponent implements OnInit {
  public sucept: number;
  public infect: number;
  public r: number;
  public steps: number;
  public t: number;
  public dsdt: number;
  public dinfectdt: number;
  public drdt: number;
  public result: Result = { t: 0, suc: 0, inf: 0, rec: 0 };
  public results: Result[] = [];
  public sirData: ChartDataSets[] = [{ data: [], label: '' }];
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
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private formBuilder: FormBuilder) {}

  sirForm = this.formBuilder.group({
    totalPopulation: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
      ]),
    ],
    initialInfected: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
      ]),
    ],
    initialSucept: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
      ]),
    ],
    totalTime: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5),
      ]),
    ],
    beta: [
      null,
      Validators.compose([
        Validators.required,
        Validators.min(-2),
        Validators.max(2),
      ]),
    ],
    gamma: [
      null,
      Validators.compose([
        Validators.required,
        Validators.min(-2),
        Validators.max(2),
      ]),
    ],
  });

  hasUnitNumber = false;

  onSubmit() {
    this.results = this.calculate();
    var time = this.results.map(({ t }) => t);
    var suceptible = this.results.map(({ suc }) => suc);
    var infected = this.results.map(({ inf }) => inf);
    var recovered = this.results.map(({ rec }) => rec);
    var outDataSet: ChartDataSets[] = [
      { data: suceptible, label: 'Suceptibles' },
      { data: infected, label: 'Infectados' },
      { data: recovered, label: 'Recuperados' },
    ];
    var days: string[] = [''];
    for (var i in time) {
      days[i] = time[i].toString();
    }
    this.sirData = outDataSet;
    this.lineChartLabels = days;
  }

  calculate(): Result[] {
    var output: Result[] = [];
    const N = 1000; // total population
    const beta = 0.2;
    const gamma = 0.1;
    const dt = 0.25; //days
    const totalTime = 120; //days
    this.steps = totalTime * (1 / dt);
    for (var i = 0; i <= this.steps; i++) {
      this.t = dt * i;

      if (i == 0) {
        this.sucept = 999;
        this.infect = 1;
        this.r = 0;
      } else {
        this.sucept = this.sucept + (dt / 2) * this.dsdt;
        this.infect = this.infect + (dt / 2) * this.dinfectdt;
        this.r = this.r + (dt / 2) * this.drdt;
      }
      /* -- Euler Step -- */
      // iResult[] = [];
      this.dsdt = (-beta * this.sucept * this.infect) / N;
      this.dinfectdt =
        (beta * this.sucept * this.infect) / N - gamma * this.infect;
      this.drdt = gamma * this.infect;
      // i + 1
      this.sucept = this.sucept + dt * this.dsdt;
      this.infect = this.infect + dt * this.dinfectdt;
      this.r = this.r + dt * this.drdt;
      /* -- end of Euler Step -- */

      /* -- Fordward diferentiation -- */
      // i + 1
      this.dsdt = (-beta * this.sucept * this.infect) / N;
      this.dinfectdt = -this.dsdt - gamma * this.infect;
      this.drdt = gamma * this.infect;
      /* this.result.t = this.t;
      this.result.suc = this.sucept;
      this.result.inf = this.infect;
      this.result.rec = this.r; */
      output.push({ t: 0, suc: 0, inf: 0, rec: 0 });
      output[i].t = this.t;
      output[i].suc = this.sucept;
      output[i].inf = this.infect;
      output[i].rec = this.r;
    }
    return output;
  }

  ngOnInit(): void {
    this.results = this.calculate();
    var time = this.results.map(({ t }) => t);
    var suceptible = this.results.map(({ suc }) => suc);
    var infected = this.results.map(({ inf }) => inf);
    var recovered = this.results.map(({ rec }) => rec);
    var outDataSet: ChartDataSets[] = [
      { data: suceptible, label: 'Suceptibles' },
      { data: infected, label: 'Infectados' },
      { data: recovered, label: 'Recuperados' },
    ];
    var days: string[] = [''];
    for (var i in time) {
      days[i] = time[i].toString();
    }
    this.sirData = outDataSet;
    this.lineChartLabels = days;
  }
}
