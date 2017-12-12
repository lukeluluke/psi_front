import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnOrderFormComponent } from './purchase-return-order-form.component';

describe('PurchaseReturnOrderFormComponent', () => {
  let component: PurchaseReturnOrderFormComponent;
  let fixture: ComponentFixture<PurchaseReturnOrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseReturnOrderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReturnOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
