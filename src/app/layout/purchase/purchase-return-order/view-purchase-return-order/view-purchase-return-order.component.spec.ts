import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPurchaseReturnOrderComponent } from './view-purchase-return-order.component';

describe('ViewPurchaseReturnOrderComponent', () => {
  let component: ViewPurchaseReturnOrderComponent;
  let fixture: ComponentFixture<ViewPurchaseReturnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPurchaseReturnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPurchaseReturnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
