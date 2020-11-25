import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCompaniesViewComponent } from './view-companies-view.component';

describe('ViewCompaniesViewComponent', () => {
  let component: ViewCompaniesViewComponent;
  let fixture: ComponentFixture<ViewCompaniesViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompaniesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompaniesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
