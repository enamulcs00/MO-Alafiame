import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditPractitionerComponent } from './edit-practitioner.component';

describe('EditPractitionerComponent', () => {
  let component: EditPractitionerComponent;
  let fixture: ComponentFixture<EditPractitionerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
