import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreServiceViewComponent } from './explore-service-view.component';

describe('ExploreServiceViewComponent', () => {
  let component: ExploreServiceViewComponent;
  let fixture: ComponentFixture<ExploreServiceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreServiceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
