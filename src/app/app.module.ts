import { FirebaseService } from './modules/statistics/services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Angular Flex-layout import
import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Material import
import { AppMaterialModule } from './app-material.module';
// Font-Awesome import
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Bootstrap imports
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppComponent } from './app.component';
// Core components
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContentComponent } from './core/content/content.component';
import { WellcomeComponent } from './core/wellcome/wellcome.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UnderConstructionComponent } from './core/under-construction/under-construction.component';
import { AboutComponent } from './core/about/about.component';
// PWA import
import { ServiceWorkerModule } from '@angular/service-worker';

// Translation imports
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    WellcomeComponent,
    NotFoundComponent,
    UnderConstructionComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppMaterialModule,
    FlexLayoutModule,
    CarouselModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
