import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpaginationComponent } from './xpagination.component';

describe('XpaginationComponent', () => {
  let component: XpaginationComponent;
  let fixture: ComponentFixture<XpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
