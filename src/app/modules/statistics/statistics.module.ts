import { FirebaseService } from './services/firebase.service';
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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoricalComponent } from './components/historical/historical.component';
import { RegionalComponent } from './components/regional/regional.component';
import { StatesComponent } from './components/states/states.component';
import { SIRComponent } from './components/s-i-r/s-i-r.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ApiService, MapService, StatesService, FirebaseService],
})
export class StatisticsModule {}
