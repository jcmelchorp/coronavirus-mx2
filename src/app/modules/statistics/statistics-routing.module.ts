import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { RegionalComponent } from './regional/regional.component';
import { StatesComponent } from './states/states.component';
import { SIRComponent } from './s-i-r/s-i-r.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    children: [
      { path: 'current', component: DashboardComponent },
      { path: 'historical', component: HistoricalComponent },
      { path: 'regional', component: RegionalComponent },
      { path: 'states', component: StatesComponent },
      { path: 'SIR', component: SIRComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
