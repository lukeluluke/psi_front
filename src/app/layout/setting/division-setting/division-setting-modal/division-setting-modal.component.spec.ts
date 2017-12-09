import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSettingModalComponent } from './division-setting-modal.component';

describe('DivisionSettingModalComponent', () => {
  let component: DivisionSettingModalComponent;
  let fixture: ComponentFixture<DivisionSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
