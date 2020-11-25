import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewTermsComponent } from './view-terms.component';

describe('ViewTermsComponent', () => {
  let component: ViewTermsComponent;
  let fixture: ComponentFixture<ViewTermsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
