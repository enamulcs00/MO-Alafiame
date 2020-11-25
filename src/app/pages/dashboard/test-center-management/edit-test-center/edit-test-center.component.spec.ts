import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditTestCenterComponent } from './edit-test-center.component';

describe('EditTestCenterComponent', () => {
  let component: EditTestCenterComponent;
  let fixture: ComponentFixture<EditTestCenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
