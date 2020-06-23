import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  menu = faBars;
  mediaSub: Subscription;
  deviceMd: boolean;
  deviceSize: string;
  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceSize = result.mqAlias;
        this.deviceMd = result.mqAlias === 'sm' ? true : false;
      }
    );
  }
}
