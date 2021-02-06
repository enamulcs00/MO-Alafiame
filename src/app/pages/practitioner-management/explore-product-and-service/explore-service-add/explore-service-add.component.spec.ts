import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreServiceAddComponent } from './explore-service-add.component';

describe('ExploreServiceAddComponent', () => {
  let component: ExploreServiceAddComponent;
  let fixture: ComponentFixture<ExploreServiceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreServiceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
