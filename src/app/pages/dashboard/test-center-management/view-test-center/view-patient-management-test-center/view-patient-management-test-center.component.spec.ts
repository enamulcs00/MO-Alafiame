import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPatientManagementTestCenterComponent } from './view-patient-management-test-center.component';

describe('ViewPatientManagementTestCenterComponent', () => {
  let component: ViewPatientManagementTestCenterComponent;
  let fixture: ComponentFixture<ViewPatientManagementTestCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientManagementTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientManagementTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
