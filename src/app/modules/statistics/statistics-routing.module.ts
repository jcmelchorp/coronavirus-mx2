import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyCircleComponent } from './my-circle/my-circle.component';
import { MyPieComponent } from './my-pie/my-pie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    children: [
      { path: 'current', component: DashboardComponent },
      { path: 'historical', component: HistoricalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsRoutingModule {}
