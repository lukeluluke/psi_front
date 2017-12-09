import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseSettingModalComponent } from './warehouse-setting-modal.component';

describe('WarehouseSettingModalComponent', () => {
  let component: WarehouseSettingModalComponent;
  let fixture: ComponentFixture<WarehouseSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
