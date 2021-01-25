import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreServiceEditComponent } from './explore-service-edit.component';

describe('ExploreServiceEditComponent', () => {
  let component: ExploreServiceEditComponent;
  let fixture: ComponentFixture<ExploreServiceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreServiceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
