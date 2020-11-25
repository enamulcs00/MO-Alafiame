import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMyProfileComponent } from './edit-my-profile.component';

describe('EditMyProfileComponent', () => {
  let component: EditMyProfileComponent;
  let fixture: ComponentFixture<EditMyProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
