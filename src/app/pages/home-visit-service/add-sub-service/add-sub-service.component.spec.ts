import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubServiceComponent } from './add-sub-service.component';

describe('AddSubServiceComponent', () => {
  let component: AddSubServiceComponent;
  let fixture: ComponentFixture<AddSubServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
