import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinkManagementComponent } from './link-management.component';

describe('LinkManagementComponent', () => {
  let component: LinkManagementComponent;
  let fixture: ComponentFixture<LinkManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
