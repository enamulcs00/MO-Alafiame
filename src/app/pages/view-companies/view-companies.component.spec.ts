import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewCompaniesComponent } from './view-companies.component';

describe('ViewCompaniesComponent', () => {
  let component: ViewCompaniesComponent;
  let fixture: ComponentFixture<ViewCompaniesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
