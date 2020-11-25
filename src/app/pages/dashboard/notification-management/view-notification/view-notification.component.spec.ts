import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewNotificationComponent } from './view-notification.component';

describe('ViewNotificationComponent', () => {
  let component: ViewNotificationComponent;
  let fixture: ComponentFixture<ViewNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
