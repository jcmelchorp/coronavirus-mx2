import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { MapService } from './services/map.service';
import { StatesService } from './services/states.service';
import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { RegionalComponent } from './regional/regional.component';
import { StatesComponent } from './states/states.component';
import { SIRComponent } from './s-i-r/s-i-r.component';

@NgModule({
  declarations: [
    StatisticsComponent,
    DashboardComponent,
    HistoricalComponent,
    RegionalComponent,
    StatesComponent,
    SIRComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, MapService, StatesService],
})
export class StatisticsModule {}
