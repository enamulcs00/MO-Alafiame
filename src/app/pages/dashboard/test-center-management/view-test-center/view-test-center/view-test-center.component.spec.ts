import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTestCenterComponent } from './view-test-center.component';

describe('ViewTestCenterComponent', () => {
  let component: ViewTestCenterComponent;
  let fixture: ComponentFixture<ViewTestCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
