import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenditureComponent } from './view-expenditure.component';

describe('ViewExpenditureComponent', () => {
  let component: ViewExpenditureComponent;
  let fixture: ComponentFixture<ViewExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
