import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeVisitServiceComponent } from './home-visit-service.component';

describe('HomeVisitServiceComponent', () => {
  let component: HomeVisitServiceComponent;
  let fixture: ComponentFixture<HomeVisitServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVisitServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVisitServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
