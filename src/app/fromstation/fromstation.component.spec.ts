import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromstationComponent } from './fromstation.component';

describe('FromstationComponent', () => {
  let component: FromstationComponent;
  let fixture: ComponentFixture<FromstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
