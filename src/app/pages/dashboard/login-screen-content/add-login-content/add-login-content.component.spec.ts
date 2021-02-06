import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoginContentComponent } from './add-login-content.component';

describe('AddLoginContentComponent', () => {
  let component: AddLoginContentComponent;
  let fixture: ComponentFixture<AddLoginContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoginContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
