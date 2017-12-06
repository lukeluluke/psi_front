import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingTransactionItemModalComponent } from './accounting-transaction-item-modal.component';

describe('AccountingTransactionItemModalComponent', () => {
  let component: AccountingTransactionItemModalComponent;
  let fixture: ComponentFixture<AccountingTransactionItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingTransactionItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingTransactionItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
