import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCircleComponent } from './my-circle.component';

describe('MyCircleComponent', () => {
  let component: MyCircleComponent;
  let fixture: ComponentFixture<MyCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
