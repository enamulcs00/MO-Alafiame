import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewFaqComponent } from './view-faq.component';

describe('ViewFaqComponent', () => {
  let component: ViewFaqComponent;
  let fixture: ComponentFixture<ViewFaqComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
