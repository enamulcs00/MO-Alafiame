import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPatientManagementHospitalComponent } from './view-patient-management-hospital.component';

describe('ViewPatientManagementHospitalComponent', () => {
  let component: ViewPatientManagementHospitalComponent;
  let fixture: ComponentFixture<ViewPatientManagementHospitalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientManagementHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientManagementHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
