import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduceProductFormComponent } from './create-produce-product-form.component';

describe('CreateProduceProductFormComponent', () => {
  let component: CreateProduceProductFormComponent;
  let fixture: ComponentFixture<CreateProduceProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduceProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduceProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
