import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewProductCategoryComponent } from './view-product-category.component';

describe('ViewProductCategoryComponent', () => {
  let component: ViewProductCategoryComponent;
  let fixture: ComponentFixture<ViewProductCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
