import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductionOrderComponent } from './view-production-order.component';

describe('ViewProductionOrderComponent', () => {
  let component: ViewProductionOrderComponent;
  let fixture: ComponentFixture<ViewProductionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductionOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
