import { Component, OnInit } from '@angular/core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss'],
})
export class UnderConstructionComponent implements OnInit {
  virus = faVirus;
  constructor(public translate: TranslateService) {}
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {}
}
