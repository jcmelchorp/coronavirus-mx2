import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { CovidRiskComponent } from './covid-risk/covid-risk.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [InformationComponent, CovidRiskComponent, MenuComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AccordionModule,
    TabsModule,
    BsDatepickerModule,
    PopoverModule,
  ],
})
export class InformationModule {}
