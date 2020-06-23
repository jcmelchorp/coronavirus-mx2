import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss'],
})
export class ModuleTwoComponent implements OnInit {
  menu = faBars;
  mediaSub: Subscription;
  deviceMd: boolean;
  deviceSize: string;

  constructor(public mediaObserver: MediaObserver) {}
  // Http Headers

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceSize = result.mqAlias;
        this.deviceMd =
          result.mqAlias === 'md' || result.mqAlias === 'lg' ? true : false;
      }
    );
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
