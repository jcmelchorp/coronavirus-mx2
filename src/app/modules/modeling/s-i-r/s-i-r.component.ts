import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-s-i-r',
  templateUrl: './s-i-r.component.html',
  styleUrls: ['./s-i-r.component.scss'],
})
export class SIRComponent implements OnInit {
  equation: string = '\\sum_{i=1}^nx_i';
  options: KatexOptions = {
    displayMode: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
