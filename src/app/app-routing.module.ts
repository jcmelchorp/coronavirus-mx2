import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './core/wellcome/wellcome.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UnderConstructionComponent } from './core/under-construction/under-construction.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  { path: '', component: WellcomeComponent },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./modules/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
  {
    path: 'information',
    loadChildren: () =>
      import('./modules/information/information.module').then(
        (m) => m.InformationModule
      ),
  },
  { path: 'about', component: AboutComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
