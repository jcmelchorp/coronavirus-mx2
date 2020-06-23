import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './core/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', component: WellcomeComponent },
  {
    path: 'module-two',
    loadChildren: () =>
      import('./modules/module-two/module-two.module').then(
        (m) => m.ModuleTwoModule
      ),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./modules/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
