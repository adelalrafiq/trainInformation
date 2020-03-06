import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromArrComponent } from './from-arr.component';

describe('FromArrComponent', () => {
  let component: FromArrComponent;
  let fixture: ComponentFixture<FromArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
