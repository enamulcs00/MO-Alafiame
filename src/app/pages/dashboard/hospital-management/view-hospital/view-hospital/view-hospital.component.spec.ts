import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewHospitalComponent } from './view-hospital.component';

describe('ViewHospitalComponent', () => {
  let component: ViewHospitalComponent;
  let fixture: ComponentFixture<ViewHospitalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
