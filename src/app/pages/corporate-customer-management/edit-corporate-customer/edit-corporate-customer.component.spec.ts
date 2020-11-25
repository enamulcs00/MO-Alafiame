import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditCorporateCustomerComponent } from './edit-corporate-customer.component';

describe('EditCorporateCustomerComponent', () => {
  let component: EditCorporateCustomerComponent;
  let fixture: ComponentFixture<EditCorporateCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCorporateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCorporateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
