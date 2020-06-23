import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyCircleComponent } from './my-circle/my-circle.component';
import { MyPieComponent } from './my-pie/my-pie.component';

@NgModule({
  declarations: [StatisticsComponent, DashboardComponent, MyLineChartComponent, MyCircleComponent, MyPieComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [ApiService],
})
export class StatisticsModule {}
