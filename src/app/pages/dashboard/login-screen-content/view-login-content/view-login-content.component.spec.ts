import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoginContentComponent } from './view-login-content.component';

describe('ViewLoginContentComponent', () => {
  let component: ViewLoginContentComponent;
  let fixture: ComponentFixture<ViewLoginContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoginContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
