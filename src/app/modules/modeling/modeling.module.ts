import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexModule } from 'ng-katex';
import { ModelingRoutingModule } from './modeling-routing.module';
import { ModelingComponent } from './modeling.component';
import { SIRComponent } from './s-i-r/s-i-r.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [ModelingComponent, SIRComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ModelingRoutingModule,
    KatexModule,
    ChartsModule,
  ],
})
export class ModelingModule {}
