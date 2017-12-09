import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategorySettingComponent } from './product-category-setting.component';

describe('ProductCategorySettingComponent', () => {
  let component: ProductCategorySettingComponent;
  let fixture: ComponentFixture<ProductCategorySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategorySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategorySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
