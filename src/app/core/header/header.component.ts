import { Component, Input } from '@angular/core';

import {
  faCat,
  faEllipsisV,
  faGlobe,
  faVirus,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() deviceXs: boolean;
  cat = faCat;
  dots = faEllipsisV;
  lang = faGlobe;
  virus = faVirus;
  constructor(public translate: TranslateService) {}
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
