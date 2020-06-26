import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Coronavirus MX';
  mediaSub: Subscription;
  public deviceXs: boolean;
  public deviceSm: boolean;

  constructor(
    public mediaObserver: MediaObserver,
    private metaService: Meta,
    private titleService: Title,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'en',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg')
    );
    iconRegistry.addSvgIcon(
      'es',
      sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg')
    );
    iconRegistry.addSvgIcon(
      'covid',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coronavirus.svg')
    );
  }
  // Http Headers

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {
        name: 'keywords',
        content:
          'coronavirus, covid19, SARS-CoV2, covid-19, angular, angular-material',
      },
      {
        name: 'description',
        content:
          'Análisis estadístico sobre la enfermedad causada por el nuevo coronavirus SARS-CoV2',
      },
      { name: 'robots', content: 'index, follow' },
      { charset: 'UTF-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'author', content: 'Julio César Melchor Pinto' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
      },
      { name: 'date', content: '2020-06-26', scheme: 'YYYY-MM-DD' },
      { name: 'application-name', content: 'Coronavirus MX' },
      { name: 'apple-mobile-web-app-status-bar', content: 'black-translucent' },
      { name: 'theme-color', content: 'black' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-TileColor', content: '#000000' },
      {
        name: 'msapplication-TileImage',
        content: 'assets/icons/ms-icon-144x144.png',
      },
      { name: '', content: '' },
      // OpenGraph metatags
      { property: 'og:title', content: 'Julio Melchor' },
      { property: 'og:type', content: 'profile' },
      { property: 'profile:first_name', content: 'Julio' },
      { property: 'profile:last_name', content: 'Melchor' },
      { property: 'profile:username', content: 'jcmelchorp' },
      { property: 'profile:gender', content: 'male' },
      { property: 'og:site_name', content: 'Coronavirus MX' },
      { property: 'og:url', content: 'https://coronavirus-mx.web.app' },
      {
        property: 'og:image:url',
        content:
          'https://coronavirus-mx.web.app/assets/screenshots/screenshot01.png',
      },
      {
        property: 'og:image:secure_url',
        content:
          'https://coronavirus-mx.web.app/assets/screenshots/screenshot02.png',
      },
      { property: 'og:image:alt', content: 'Website view example' },
      { property: 'og:image:type', content: 'image/png' },
      {
        property: 'og:description',
        content: 'Análisis estadístico sobre la enfermedad COVID-19',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:text:title', content: 'Coronavirus México' },
      {
        property: 'twitter:image',
        content:
          'https://coronavirus-mx.web.app/assets/screenshots/screenshot01.png',
      },
    ]);
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
        this.deviceSm =
          result.mqAlias === 'xs' || result.mqAlias === 'sm' ? true : false;
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
