import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestCenterManagementComponent } from './test-center-management.component';

describe('TestCenterManagementComponent', () => {
  let component: TestCenterManagementComponent;
  let fixture: ComponentFixture<TestCenterManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCenterManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
