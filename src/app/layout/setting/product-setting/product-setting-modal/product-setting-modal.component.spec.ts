import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSettingModalComponent } from './product-setting-modal.component';

describe('ProductSettingModalComponent', () => {
  let component: ProductSettingModalComponent;
  let fixture: ComponentFixture<ProductSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
