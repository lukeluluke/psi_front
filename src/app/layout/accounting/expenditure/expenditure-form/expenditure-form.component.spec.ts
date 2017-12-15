import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureFormComponent } from './expenditure-form.component';

describe('ExpenditureFormComponent', () => {
  let component: ExpenditureFormComponent;
  let fixture: ComponentFixture<ExpenditureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
