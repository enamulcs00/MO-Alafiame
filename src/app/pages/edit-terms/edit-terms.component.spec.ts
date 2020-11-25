import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditTermsComponent } from './edit-terms.component';

describe('EditTermsComponent', () => {
  let component: EditTermsComponent;
  let fixture: ComponentFixture<EditTermsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
