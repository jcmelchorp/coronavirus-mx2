import { Component, Input } from '@angular/core';
import {
  faCat,
  faEllipsisV,
  faGlobe,
  faVirus,
} from '@fortawesome/free-solid-svg-icons';

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
  constructor() {}
}
