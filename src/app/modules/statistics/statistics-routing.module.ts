import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { RegionalComponent } from './regional/regional.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    children: [
      { path: 'current', component: DashboardComponent },
      { path: 'historical', component: HistoricalComponent },
      { path: 'regional', component: RegionalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
