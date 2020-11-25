import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditStaticContentManagementComponent } from './edit-static-content-management.component';

describe('EditStaticContentManagementComponent', () => {
  let component: EditStaticContentManagementComponent;
  let fixture: ComponentFixture<EditStaticContentManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaticContentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaticContentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
