import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingModalComponent } from './company-setting-modal.component';

describe('CompanySettingModalComponent', () => {
  let component: CompanySettingModalComponent;
  let fixture: ComponentFixture<CompanySettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
