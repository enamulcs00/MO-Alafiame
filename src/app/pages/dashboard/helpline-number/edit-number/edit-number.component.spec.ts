import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditNumberComponent } from './edit-number.component';

describe('EditNumberComponent', () => {
  let component: EditNumberComponent;
  let fixture: ComponentFixture<EditNumberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
