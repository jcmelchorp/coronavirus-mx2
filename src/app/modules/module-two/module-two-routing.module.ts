import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleTwoComponent } from './module-two.component';
import { WellcomeModTwoComponent } from './wellcome-mod-two/wellcome-mod-two.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleTwoComponent,
    children: [{ path: '', component: WellcomeModTwoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleTwoRoutingModule {}
