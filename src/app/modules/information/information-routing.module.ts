import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationComponent } from './information.component';
import { MenuComponent } from './menu/menu.component';
import { CovidRiskComponent } from './covid-risk/covid-risk.component';
import { ReturnToNormalComponent } from './return-to-normal/return-to-normal.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'covid-risk', component: CovidRiskComponent },
      { path: 'return-to-normal', component: ReturnToNormalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationRoutingModule {}
