import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleTwoComponent } from './module-two.component';
import { WellcomeModTwoComponent } from './wellcome-mod-two/wellcome-mod-two.component';

@NgModule({
  declarations: [ModuleTwoComponent, WellcomeModTwoComponent],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
})
export class ModuleTwoModule {}
