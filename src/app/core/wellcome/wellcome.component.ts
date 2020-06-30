import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
})
export class WellcomeComponent implements OnInit {
  constructor(public translate: TranslateService) {}
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {}
}
