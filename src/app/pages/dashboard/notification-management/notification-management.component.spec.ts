import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotificationManagementComponent } from './notification-management.component';

describe('NotificationManagementComponent', () => {
  let component: NotificationManagementComponent;
  let fixture: ComponentFixture<NotificationManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
