import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddProductManagementComponent } from './add-product-management.component';

describe('AddProductManagementComponent', () => {
  let component: AddProductManagementComponent;
  let fixture: ComponentFixture<AddProductManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
