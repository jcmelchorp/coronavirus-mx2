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

import { HistoricalComponent } from './historical/historical.component';
import { RegionalComponent } from './regional/regional.component';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    StatisticsComponent,
    DashboardComponent,
    HistoricalComponent,
    RegionalComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [ApiService, MapService],
})
export class StatisticsModule {}
