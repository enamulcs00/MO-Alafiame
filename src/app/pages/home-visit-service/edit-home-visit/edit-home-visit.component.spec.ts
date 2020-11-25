import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditHomeVisitComponent } from './edit-home-visit.component';

describe('EditHomeVisitComponent', () => {
  let component: EditHomeVisitComponent;
  let fixture: ComponentFixture<EditHomeVisitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHomeVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHomeVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
