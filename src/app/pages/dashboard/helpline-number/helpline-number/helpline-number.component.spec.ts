import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HelplineNumberComponent } from './helpline-number.component';

describe('HelplineNumberComponent', () => {
  let component: HelplineNumberComponent;
  let fixture: ComponentFixture<HelplineNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HelplineNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
