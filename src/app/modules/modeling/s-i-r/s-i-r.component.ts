import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-s-i-r',
  templateUrl: './s-i-r.component.html',
  styleUrls: ['./s-i-r.component.scss'],
})
export class SIRComponent implements OnInit {
  public total_population;
  public sucept: number[];
  public s_0: number;
  public infect: number[];
  public infect_0: number;
  public r: number[];
  public r_0: number;
  public beta: number;
  public gamma: number;
  public dt = 0.25; //days
  public t: number[] = [];
  public dsdt: number[];
  public dinfectdt: number[];
  public drdt: number[];
  calculate() {
    for (var i = 0; 1 < 101; i++) {
      if (i == 0) {
        this.sucept[i] = this.s_0;
        this.infect[i] = this.infect_0;
        this.r[i] = this.r_0;
      } else {
        this.sucept[i] = this.sucept[i - 1] + (this.dt / 2) * this.dsdt[i - 1];
        this.infect[i] = this.infect_0;
        this.r[i] = this.r_0;
      }
      this.t[i] = this.dt * i;
      this.dsdt[i] =
        (-this.beta * this.sucept[i] * this.infect[i]) / this.total_population;
      this.dinfectdt[i] =
        (this.beta * this.sucept[i] * this.infect[i]) / this.total_population -
        this.gamma * this.infect[i];
      this.drdt[i] = this.gamma * this.infect[i];
      this.sucept[i + 1] = this.sucept[i] + this.dt * this.dsdt[i];
      this.infect[i + 1] = this.infect[i] + this.dt * this.dinfectdt[i];
      this.r[i + 1] = this.r[i] + this.dt * this.drdt[i];
      this.dsdt[i + 1] =
        (-this.beta * this.sucept[i + 1] * this.infect[i + 1]) /
        this.total_population;
      this.dinfectdt[i + 1] =
        (this.beta * this.sucept[i + 1] * this.infect[i + 1]) /
          this.total_population -
        this.gamma * this.infect[i + 1];
      this.drdt[i] = this.gamma * this.infect[i + 1];
    }
    console.log(this.t);
  }
  //public dsdt[i]=-beta*sucept[i]*infect[i]/total_population;
  //public dinfectdt[i]=beta*sucept[i]*infect[i]/total_population-gamma*infect[i];
  // public drdt[i]=gamma*infect[i];
  // euler step
  //public s[i+1]=s[i]+dt*dsdt[i];
  //public infect[i+1]=infect[i]+dt*dinfectdt[i];
  //public r[i+1]=r[i]+dt*drdt[i];

  equation: string = '\\sum_{i=1}^nx_i';
  options: KatexOptions = {
    displayMode: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
