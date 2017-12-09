import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategorySettingModalComponent } from './product-category-setting-modal.component';

describe('ProductCategorySettingModalComponent', () => {
  let component: ProductCategorySettingModalComponent;
  let fixture: ComponentFixture<ProductCategorySettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategorySettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategorySettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
