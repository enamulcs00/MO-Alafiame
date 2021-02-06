import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferalManagementComponent } from './refferal-management.component';

describe('RefferalManagementComponent', () => {
  let component: RefferalManagementComponent;
  let fixture: ComponentFixture<RefferalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
