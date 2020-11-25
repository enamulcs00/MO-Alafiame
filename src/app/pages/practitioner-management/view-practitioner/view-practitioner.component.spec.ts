import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewPractitionerComponent } from './view-practitioner.component';

describe('ViewPractitionerComponent', () => {
  let component: ViewPractitionerComponent;
  let fixture: ComponentFixture<ViewPractitionerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPractitionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPractitionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
