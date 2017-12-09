import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionSettingComponent } from './division-setting.component';

describe('DivisionSettingComponent', () => {
  let component: DivisionSettingComponent;
  let fixture: ComponentFixture<DivisionSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
