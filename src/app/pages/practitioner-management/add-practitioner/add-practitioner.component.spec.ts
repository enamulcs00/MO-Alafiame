import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPractitionerComponent } from './add-practitioner.component';

describe('AddPractitionerComponent', () => {
  let component: AddPractitionerComponent;
  let fixture: ComponentFixture<AddPractitionerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
