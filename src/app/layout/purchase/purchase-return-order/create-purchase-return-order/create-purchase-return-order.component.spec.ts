import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePurchaseReturnOrderComponent } from './create-purchase-return-order.component';

describe('CreatePurchaseReturnOrderComponent', () => {
  let component: CreatePurchaseReturnOrderComponent;
  let fixture: ComponentFixture<CreatePurchaseReturnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePurchaseReturnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePurchaseReturnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
