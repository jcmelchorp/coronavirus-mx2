import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeModTwoComponent } from './wellcome-mod-two.component';

describe('WellcomeModTwoComponent', () => {
  let component: WellcomeModTwoComponent;
  let fixture: ComponentFixture<WellcomeModTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeModTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeModTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
