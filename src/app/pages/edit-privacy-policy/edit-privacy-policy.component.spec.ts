import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPrivacyPolicyComponent } from './edit-privacy-policy.component';

describe('EditPrivacyPolicyComponent', () => {
  let component: EditPrivacyPolicyComponent;
  let fixture: ComponentFixture<EditPrivacyPolicyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
