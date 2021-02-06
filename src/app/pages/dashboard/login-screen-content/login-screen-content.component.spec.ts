import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenContentComponent } from './login-screen-content.component';

describe('LoginScreenContentComponent', () => {
  let component: LoginScreenContentComponent;
  let fixture: ComponentFixture<LoginScreenContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginScreenContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginScreenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
