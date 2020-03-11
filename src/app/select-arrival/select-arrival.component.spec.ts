import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArrivalComponent } from './select-arrival.component';

describe('SelectArrivalComponent', () => {
  let component: SelectArrivalComponent;
  let fixture: ComponentFixture<SelectArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
