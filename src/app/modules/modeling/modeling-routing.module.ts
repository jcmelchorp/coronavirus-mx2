import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelingComponent } from './modeling.component';
import { SIRComponent } from './s-i-r/s-i-r.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {
    path: '',
    component: ModelingComponent,
    children: [
      { path: 'SIR', component: SIRComponent },
      { path: 'address', component: AddressComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelingRoutingModule {}
