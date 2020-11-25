import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddTestCenterComponent } from './add-test-center.component';

describe('AddTestCenterComponent', () => {
  let component: AddTestCenterComponent;
  let fixture: ComponentFixture<AddTestCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
