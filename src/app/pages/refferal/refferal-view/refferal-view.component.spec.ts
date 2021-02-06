import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferalViewComponent } from './refferal-view.component';

describe('RefferalViewComponent', () => {
  let component: RefferalViewComponent;
  let fixture: ComponentFixture<RefferalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
