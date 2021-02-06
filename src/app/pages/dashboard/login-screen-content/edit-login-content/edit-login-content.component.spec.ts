import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoginContentComponent } from './edit-login-content.component';

describe('EditLoginContentComponent', () => {
  let component: EditLoginContentComponent;
  let fixture: ComponentFixture<EditLoginContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLoginContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
